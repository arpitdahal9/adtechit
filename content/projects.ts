export interface Project {
  id: string;
  title: string;
  category: string;
  context: string;
  whatIDid: string;
  outcome: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "trading-app",
    title: "Day Trading Journal (Android App)",
    category: "Mobile Dev",
    context: "Developed and published a comprehensive trading journal application for active traders.",
    whatIDid: "Built the full application lifecycle from concept to Play Store release. Implemented local database storage, performance analytics, and responsive UI.",
    outcome: "Successfully launched on Google Play Store, providing traders with a tool to track performance and improve discipline.",
    tags: ["Android Development", "Mobile App", "Google Play Store", "Java/Kotlin"],
  },
  {
    id: "jira-itsm",
    title: "Enterprise Service Management Rollout",
    category: "Operations",
    context: "Mid-sized organization required a structured service delivery platform to replace ad-hoc email requests and improve SLA tracking.",
    whatIDid: "Architected and implemented a Jira Service Management instance. Designed custom workflows for incident/request types, configured automation rules for routing, and established a knowledge base structure.",
    outcome: "Standardized IT support workflows, enabled measurable SLA tracking, and reduced ticket resolution time by centralized intake and automated triage.",
    tags: ["Jira Service Management", "ITIL", "Process Automation", "SLA Reporting"],
  },
  {
    id: "msp-transition",
    title: "In-House IT Infrastructure Transition",
    category: "Infrastructure",
    context: "Organization moved from full MSP reliance to internal IT ownership to improve responsiveness and security control.",
    whatIDid: "Took ownership of internal infrastructure, network management, and security operations. Audited existing assets, documented network topology, and established internal patch management routines.",
    outcome: "Successfully brought core IT operations in-house, reducing external vendor costs and significantly improving incident response times for critical business functions.",
    tags: ["Vendor Management", "Network Admin", "Asset Management", "Operational Ownership"],
  },
  {
    id: "iso-27001",
    title: "ISO 27001 Audit Readiness Support",
    category: "GRC / Security",
    context: "Organization pursued ISO 27001 certification requiring evidence of operational controls and rigorous documentation.",
    whatIDid: "Aligned daily operational practices with security controls. Collected technical evidence for audits, documented access control procedures, and ensured endpoint compliance standards were met.",
    outcome: "Contributed to successful certification by validating that technical reality matched policy requirements, demonstrating a strong culture of compliance.",
    tags: ["ISO 27001", "Compliance", "Audit Evidence", "Policy Implementation"],
  },
  {
    id: "iis-ops",
    title: "High-Availability Web Hosting Operations",
    category: "Web Ops",
    context: "Production Windows web hosting environment required stable uptime, security hardening, and performance monitoring.",
    whatIDid: "Managed IIS configurations, including application pools, SSL/TLS binding management, and log analysis. Implemented routine maintenance windows and performance monitoring.",
    outcome: "Maintained high availability for business-critical applications through proactive monitoring and disciplined change management procedures.",
    tags: ["Windows Server", "IIS", "SSL/TLS", "Log Analysis", "PowerShell"],
  },
  {
    id: "ad-homelab",
    title: "Enterprise Identity Simulation Lab",
    category: "Lab / R&D",
    context: "Self-directed initiative to master Windows enterprise patterns outside of production constraints.",
    whatIDid: "Built a complete Active Directory forest (Windows Server 2019/2022). Configured DNS, DHCP, GPOs for security baselines, and practiced domain join/trust operations.",
    outcome: "Deepened practical understanding of Kerberos, Group Policy inheritance, and identity lifecycle management, directly applying concepts to professional troubleshoot scenarios.",
    tags: ["Active Directory", "DNS/DHCP", "Group Policy", "Windows Server"],
  },
  {
    id: "pentest-remediation",
    title: "Network Defense & Remediation Cycle",
    category: "Security Ops",
    context: "Simulation of a corporate network breach to understand the attacker lifecycle and validate defense efficacy.",
    whatIDid: "Conducted controlled pentests (Kali, Nmap, Metasploit) against a lab AD environment. Identified vulnerabilities, then switched roles to Blue Team to implement detection rules and patch gaps.",
    outcome: "Closed the loop between attack and defense. Developed a threat-actor perspective that informs more effective system hardening and alert prioritization.",
    tags: ["Kali Linux", "Vulnerability Management", "Metasploit", "Hardening"],
  },
  {
    id: "cve-research",
    title: "CVE-2025-32462 Vulnerability Analysis",
    category: "Research",
    context: "Technical deep-dive into a specific local privilege escalation vulnerability to understand exploit mechanics.",
    whatIDid: "Replicated the vulnerability in a controlled environment. Documented the escalation path in sudo and tested mitigation strategies provided by vendors.",
    outcome: "Produced technical documentation demonstrating the importance of timely patching and principle of least privilege, suitable for peer technical review.",
    tags: ["Vulnerability Research", "Privilege Escalation", "Linux Security", "Patch Management"],
  },
];
