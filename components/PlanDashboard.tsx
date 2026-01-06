"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Trophy } from "lucide-react";
import { careerPlan, Month, Task } from "@/content/plan";
import { cn } from "@/lib/utils";

export const PlanDashboard = () => {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const [expandedMonths, setExpandedMonths] = useState<Record<number, boolean>>({ 1: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("devops-plan-progress");
    if (saved) {
      try {
        setCompletedTasks(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  const toggleTask = (taskId: string) => {
    const newState = { ...completedTasks, [taskId]: !completedTasks[taskId] };
    setCompletedTasks(newState);
    localStorage.setItem("devops-plan-progress", JSON.stringify(newState));
  };

  const toggleMonth = (monthId: number) => {
    setExpandedMonths((prev) => ({ ...prev, [monthId]: !prev[monthId] }));
  };

  const calculateProgress = (month: Month) => {
    const tasks = month.sections.flatMap((s) => s.tasks);
    if (tasks.length === 0) return 0;
    const completed = tasks.filter((t) => completedTasks[t.id]).length;
    return Math.round((completed / tasks.length) * 100);
  };

  const totalTasks = careerPlan.flatMap(m => m.sections.flatMap(s => s.tasks));
  const totalCompleted = totalTasks.filter(t => completedTasks[t.id]).length;
  const overallProgress = Math.round((totalCompleted / totalTasks.length) * 100);

  if (!mounted) return null;

  return (
    <div className="space-y-8">
      {/* Overall Progress */}
      <div className="bg-card border border-white/10 rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Overall Progress</h2>
          <span className="text-2xl font-bold text-accent">{overallProgress}%</span>
        </div>
        <div className="w-full bg-secondary/20 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-accent h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {totalCompleted} of {totalTasks.length} tasks completed
        </p>
      </div>

      <div className="grid gap-6">
        {careerPlan.map((month) => {
          const progress = calculateProgress(month);
          const isExpanded = expandedMonths[month.id];

          return (
            <motion.div
              key={month.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: month.id * 0.1 }}
              className={cn(
                "bg-card border rounded-xl overflow-hidden transition-all duration-300",
                isExpanded ? "border-accent/50 shadow-md" : "border-white/5"
              )}
            >
              <div 
                onClick={() => toggleMonth(month.id)}
                className="p-6 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="flex justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
                        Month {month.id}
                      </span>
                      <span className="text-sm text-muted-foreground">{month.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold">{month.title}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                      <div className="text-sm font-medium">{progress}% Complete</div>
                      <div className="w-24 bg-secondary/20 rounded-full h-1.5 mt-1">
                        <div 
                          className="bg-accent h-full rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
                
                <p className="mt-2 text-muted-foreground">{month.focus}</p>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 border-t border-white/5">
                      <div className="grid md:grid-cols-3 gap-8 mt-6">
                        <div className="md:col-span-2 space-y-8">
                          {month.sections.map((section, idx) => (
                            <div key={idx}>
                              <h4 className="font-semibold mb-3 text-lg">{section.title}</h4>
                              <div className="space-y-3">
                                {section.tasks.map((task) => (
                                  <div 
                                    key={task.id}
                                    onClick={() => toggleTask(task.id)}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group"
                                  >
                                    <div className={cn(
                                      "mt-0.5 transition-colors",
                                      completedTasks[task.id] ? "text-accent" : "text-muted-foreground group-hover:text-foreground"
                                    )}>
                                      {completedTasks[task.id] ? (
                                        <CheckCircle2 className="w-5 h-5" />
                                      ) : (
                                        <Circle className="w-5 h-5" />
                                      )}
                                    </div>
                                    <div>
                                      <div className={cn(
                                        "font-medium transition-all",
                                        completedTasks[task.id] && "text-muted-foreground line-through"
                                      )}>
                                        {task.text}
                                      </div>
                                      {task.subtext && (
                                        <div className="text-sm text-muted-foreground mt-0.5">{task.subtext}</div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-secondary/10 rounded-xl p-5 h-fit">
                          <h4 className="flex items-center gap-2 font-semibold mb-4 text-white">
                            <Trophy className="w-4 h-4 text-accent" />
                            Outcomes
                          </h4>
                          <ul className="space-y-3">
                            {month.outcomes.map((outcome, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                                <span className="text-accent">•</span>
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
