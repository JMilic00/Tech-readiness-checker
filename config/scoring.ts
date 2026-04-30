import { Section } from "@/types/assessment";

export const sections: Section[] = [
  {
    id: "product",
    title: "Product & Requirements",
    weight: 0.10,
    questions: [
      {
        id: "product_1",
        text: "We clearly define user requirements before development begins.",
        recommendation: "Document requirements before starting development.",
        impact: 3,
      },
      {
        id: "product_2",
        text: "We regularly gather feedback from end users.",
        recommendation: "Set up a regular feedback loop with users.",
        impact: 2,
      },
      {
        id: "product_3",
        text: "We prioritise features based on business value.",
        recommendation: "Introduce a prioritisation framework such as MoSCoW.",
        impact: 2,
      },
      {
        id: "product_4",
        text: "We maintain an up-to-date product roadmap.",
        recommendation: "Create and maintain a living product roadmap.",
        impact: 1,
      },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Code Quality",
    weight: 0.20,
    questions: [
      {
        id: "arch_1",
        text: "Our codebase follows consistent coding standards.",
        recommendation: "Adopt a style guide and enforce it with a linter.",
        impact: 2,
      },
      {
        id: "arch_2",
        text: "We conduct code reviews before merging changes.",
        recommendation: "Introduce mandatory code reviews for all pull requests.",
        impact: 3,
      },
      {
        id: "arch_3",
        text: "Our architecture is documented and understood by the team.",
        recommendation: "Document your architecture and keep it up to date.",
        impact: 2,
      },
      {
        id: "arch_4",
        text: "We actively manage and reduce technical debt.",
        recommendation: "Schedule regular refactoring and tech debt reviews.",
        impact: 3,
      },
    ],
  },
  {
    id: "security",
    title: "Security & Privacy",
    weight: 0.20,
    questions: [
      {
        id: "sec_1",
        text: "We follow security best practices during development.",
        recommendation: "Adopt OWASP guidelines as a baseline.",
        impact: 3,
      },
      {
        id: "sec_2",
        text: "User data is stored and transmitted securely.",
        recommendation: "Ensure encryption at rest and in transit.",
        impact: 3,
      },
      {
        id: "sec_3",
        text: "We regularly review access permissions and credentials.",
        recommendation: "Audit access controls and rotate credentials regularly.",
        impact: 2,
      },
      {
        id: "sec_4",
        text: "We have a process for handling security vulnerabilities.",
        recommendation: "Define a vulnerability disclosure and response process.",
        impact: 2,
      },
    ],
  },
  {
    id: "testing",
    title: "Testing & Reliability",
    weight: 0.20,
    questions: [
      {
        id: "test_1",
        text: "We write automated tests for critical parts of the system.",
        recommendation: "Start with unit tests for business logic.",
        impact: 3,
      },
      {
        id: "test_2",
        text: "We test new features before releasing them to users.",
        recommendation: "Introduce a staging environment and QA process.",
        impact: 3,
      },
      {
        id: "test_3",
        text: "We track and respond to bugs in a timely manner.",
        recommendation: "Use an issue tracker and define SLAs for bug resolution.",
        impact: 2,
      },
      {
        id: "test_4",
        text: "Our system has defined uptime and reliability targets.",
        recommendation: "Define SLOs and measure them continuously.",
        impact: 2,
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    weight: 0.20,
    questions: [
      {
        id: "devops_1",
        text: "We can deploy to production quickly and confidently.",
        recommendation: "Invest in CI/CD pipelines to automate deployments.",
        impact: 3,
      },
      {
        id: "devops_2",
        text: "Our deployment process is automated.",
        recommendation: "Automate builds, tests, and deployments.",
        impact: 3,
      },
      {
        id: "devops_3",
        text: "We can roll back a release if something goes wrong.",
        recommendation: "Implement versioned deployments with rollback support.",
        impact: 2,
      },
      {
        id: "devops_4",
        text: "Infrastructure is version controlled and reproducible.",
        recommendation: "Adopt Infrastructure as Code practices.",
        impact: 2,
      },
    ],
  },
  {
    id: "data",
    title: "Data & Monitoring",
    weight: 0.10,
    questions: [
      {
        id: "data_1",
        text: "We monitor our application in production.",
        recommendation: "Set up monitoring and alerting for key metrics.",
        impact: 3,
      },
      {
        id: "data_2",
        text: "We have visibility into errors and exceptions.",
        recommendation: "Integrate an error tracking tool such as Sentry.",
        impact: 2,
      },
      {
        id: "data_3",
        text: "We use data to make product decisions.",
        recommendation: "Introduce analytics to track user behaviour.",
        impact: 1,
      },
      {
        id: "data_4",
        text: "We have a backup and recovery plan for our data.",
        recommendation: "Implement automated backups and test recovery regularly.",
        impact: 3,
      },
    ],
  },
];