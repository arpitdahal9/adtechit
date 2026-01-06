export interface Task {
  id: string;
  text: string;
  subtext?: string;
}

export interface Section {
  title: string;
  tasks: Task[];
}

export interface Month {
  id: number;
  title: string;
  duration: string;
  focus: string;
  sections: Section[];
  outcomes: string[];
}

export const careerPlan: Month[] = [
  {
    id: 1,
    title: "Foundation + AWS Certification",
    duration: "Weeks 1-4",
    focus: "Cloud platform fundamentals and infrastructure-as-code basics.",
    sections: [
      {
        title: "AWS Fundamentals (20 hours)",
        tasks: [
          { id: "m1-aws-1", text: "Master: EC2, S3, RDS, networking, VPC architecture" },
          { id: "m1-aws-2", text: "Practice: Deploy sample resources in AWS free tier" },
          { id: "m1-aws-3", text: "Create AWS free tier account" },
          { id: "m1-aws-4", text: "Book AWS Skill Builder access" },
        ],
      },
      {
        title: "Terraform Infrastructure as Code (15 hours)",
        tasks: [
          { id: "m1-tf-1", text: "Core concepts: variables, outputs, modules, state management" },
          { id: "m1-tf-2", text: "Hands-on: Provision a 3-tier web application infrastructure on AWS" },
          { id: "m1-tf-3", text: "Deliverable: GitHub repository with well-documented Terraform code" },
        ],
      },
      {
        title: "Linux scripting and automation (15 hours)",
        tasks: [
          { id: "m1-linux-1", text: "Bash/Python for server provisioning, monitoring, log parsing" },
          { id: "m1-linux-2", text: "Deliverable: 2-3 automation scripts in GitHub repository" },
        ],
      },
    ],
    outcomes: [
      "3 GitHub projects with detailed READMEs and architecture diagrams",
      "Hands-on AWS and IaC knowledge",
    ],
  },
  {
    id: 2,
    title: "Certification + CI/CD Integration",
    duration: "Weeks 5-8",
    focus: "AWS Solutions Architect Associate exam and automated deployment pipelines.",
    sections: [
      {
        title: "AWS Solutions Architect Associate Prep (30-35 hours)",
        tasks: [
          { id: "m2-cert-1", text: "Udemy course (Stephane Maarek or Adrian Cantrill)" },
          { id: "m2-cert-2", text: "2-week learning phase" },
          { id: "m2-cert-3", text: "2-week intensive review/practice exams (Target 80%+)" },
          { id: "m2-cert-4", text: "Schedule Exam for Week 8 ($150 AUD)" },
          { id: "m2-cert-5", text: "Take Exam (Pass rate 85-90% if >80% on practice)" },
        ],
      },
      {
        title: "CI/CD Pipeline Fundamentals (15 hours)",
        tasks: [
          { id: "m2-cicd-1", text: "GitHub Actions: Set up automated deployment pipelines" },
          { id: "m2-cicd-2", text: "Build real DevOps project: Web app → GitHub → auto-deploy to EC2" },
          { id: "m2-cicd-3", text: "Advanced portfolio project: Multi-tier app with IaC + CI/CD" },
        ],
      },
    ],
    outcomes: [
      "AWS Solutions Architect Associate certification",
      "5 GitHub projects including multi-tier CI/CD pipeline",
      "Demonstrated ability to design scalable solutions",
    ],
  },
  {
    id: 3,
    title: "Advanced Skills + Visibility Building",
    duration: "Weeks 9-12",
    focus: "Deepen DevOps expertise and build public visibility.",
    sections: [
      {
        title: "Kubernetes and Container Orchestration (20 hours)",
        tasks: [
          { id: "m3-k8s-1", text: "Docker mastery: Dockerfile, multi-stage builds, Compose" },
          { id: "m3-k8s-2", text: "Kubernetes basics: Deployments, services, ConfigMaps, PVs" },
          { id: "m3-k8s-3", text: "Hands-on: Deploy containerized application on AWS EKS or Minikube" },
        ],
      },
      {
        title: "Observability and Monitoring (15 hours)",
        tasks: [
          { id: "m3-obs-1", text: "Prometheus + Grafana: Set up monitoring stack on K8s" },
          { id: "m3-obs-2", text: "CloudWatch deep dive: AWS-native monitoring and alerting" },
          { id: "m3-obs-3", text: "Hands-on: Create monitoring dashboard with real alerts" },
        ],
      },
      {
        title: "Visibility Building",
        tasks: [
          { id: "m3-vis-1", text: "Write technical blog post (1,500-2,000 words) on Medium/LinkedIn" },
          { id: "m3-vis-2", text: "LinkedIn: Update profile with AWS credential, DevOps skills" },
          { id: "m3-vis-3", text: "GitHub cleanup: Architecture diagrams, READMEs, comments" },
          { id: "m3-vis-4", text: "Network: Connect with 50-100 cloud/DevOps professionals" },
        ],
      },
      {
        title: "Capstone Project: Multi-region DR",
        tasks: [
          { id: "m3-cap-1", text: "Primary region: Full application stack" },
          { id: "m3-cap-2", text: "Failover region: Replicated infrastructure, auto-triggered" },
          { id: "m3-cap-3", text: "Terraform IaC: Complete infrastructure provisioning" },
          { id: "m3-cap-4", text: "Monitoring: Cross-region health checks and alerts" },
        ],
      },
    ],
    outcomes: [
      "7+ GitHub projects (including impressive capstone)",
      "Technical blog post published",
      "Interview-ready architecture knowledge",
    ],
  },
  {
    id: 4,
    title: "Active Recruitment Phase 1",
    duration: "Weeks 13-16",
    focus: "Job applications and interview preparation.",
    sections: [
      {
        title: "Job Application Blitz (Weeks 13-14)",
        tasks: [
          { id: "m4-app-1", text: "Target roles: DevOps, Cloud, Infrastructure, Platform Engineer" },
          { id: "m4-app-2", text: "Identify 20-30 companies using AWS" },
          { id: "m4-app-3", text: "Customize cover letters for each application" },
          { id: "m4-app-4", text: "Target: 50-75 applications total (10-15/day)" },
        ],
      },
      {
        title: "Interview Preparation Intensive (Weeks 15-16)",
        tasks: [
          { id: "m4-prep-1", text: "Mock interviews: Peers, Pramp, Interviewing.io" },
          { id: "m4-prep-2", text: "Prepare stories: Debugging, IaC, CI/CD design" },
          { id: "m4-prep-3", text: "Technical prep: Bash/Python, Terraform, AWS scenarios" },
          { id: "m4-prep-4", text: "Behavioral prep: STAR method (Teamwork, Conflict, Failure)" },
        ],
      },
    ],
    outcomes: [
      "7-18 phone screens",
      "Interview confidence",
    ],
  },
  {
    id: 5,
    title: "Interviews + Negotiation",
    duration: "Weeks 17-20",
    focus: "Executing interviews and negotiating offers.",
    sections: [
      {
        title: "Interview Execution (Weeks 17-18)",
        tasks: [
          { id: "m5-int-1", text: "Conduct 5-10 interviews" },
          { id: "m5-int-2", text: "Track interviews: Spreadsheet of feedback/next steps" },
          { id: "m5-int-3", text: "Send thank-you emails within 2 hours" },
        ],
      },
      {
        title: "Salary Negotiation (Weeks 19-20)",
        tasks: [
          { id: "m5-neg-1", text: "Research market data ($146k avg)" },
          { id: "m5-neg-2", text: "Counter offer: $140-150k (10-15% higher)" },
          { id: "m5-neg-3", text: "Evaluate: Base, Benefits, Flexibility" },
        ],
      },
    ],
    outcomes: [
      "Accepted offer: $130-145k base salary",
      "Bonus/equity component",
    ],
  },
  {
    id: 6,
    title: "Transition + Onboarding",
    duration: "Weeks 21-24",
    focus: "Leaving current role and starting new one successfully.",
    sections: [
      {
        title: "Handover and Notice (Weeks 21-22)",
        tasks: [
          { id: "m6-tran-1", text: "Provide formal two-week notice" },
          { id: "m6-tran-2", text: "Document processes for handover" },
          { id: "m6-tran-3", text: "Collect references" },
        ],
      },
      {
        title: "New Role Onboarding (Weeks 23-24)",
        tasks: [
          { id: "m6-onb-1", text: "Learn architecture and deployment processes" },
          { id: "m6-onb-2", text: "Set up local development environment" },
          { id: "m6-onb-3", text: "Deliver first sprint contribution" },
        ],
      },
    ],
    outcomes: [
      "DevOps Engineer role started",
      "Integrated into team",
    ],
  },
];
