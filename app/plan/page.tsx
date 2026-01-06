import { Metadata } from "next";
import { PlanDashboard } from "@/components/PlanDashboard";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "DevOps Career Plan | Arpit Dahal",
  description: "Six-month strategic plan for transitioning to a DevOps Engineer role.",
};

export default function PlanPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="container mx-auto px-4 py-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">DevOps Career Transition Plan</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A structured 6-month roadmap to transition from Systems Administration to DevOps Engineering,
            focusing on AWS, IaC, CI/CD, and Container Orchestration.
          </p>
        </div>
        <PlanDashboard />
      </div>
    </main>
  );
}
