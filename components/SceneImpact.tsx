"use client";

const highlights = [
  {
    value: "99.9%",
    label: "Uptime Maintained",
    detail: "For core IIS & internal business services.",
  },
  {
    value: "< 15m",
    label: "Response Time",
    detail: "Achieved for critical P1 incidents via improved triage.",
  },
  {
    value: "100%",
    label: "Audit Readiness",
    detail: "Technical evidence aligned for ISO 27001 certification.",
  },
  {
    value: "Zero",
    label: "Vendor Reliance",
    detail: "Eliminated MSP dependency for core infrastructure.",
  },
];

export const SceneImpact = () => {
  return (
    <section className="py-24 md:py-32 border-t border-white/5 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                {item.value}
              </span>
              <span className="text-accent font-medium text-sm tracking-wider uppercase">
                {item.label}
              </span>
              <p className="text-secondary text-sm max-w-[200px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
