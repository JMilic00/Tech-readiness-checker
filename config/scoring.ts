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
      },
      {
        id: "product_2",
        text: "We regularly gather feedback from end users.",
        recommendation: "Set up a regular feedback loop with users.",
      },
      {
        id: "product_3",
        text: "We prioritise features based on business value.",
        recommendation: "Introduce a prioritisation framework such as MoSCoW.",
      },
      {
        id: "product_4",
        text: "We maintain an up-to-date product roadmap.",
        recommendation: "Create and maintain a living product roadmap.",
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
      },
      {
        id: "arch_2",
        text: "We conduct code reviews before merging changes.",
        recommendation: "Introduce mandatory code reviews for all pull requests.",
      },
      {
        id: "arch_3",
        text: "Our architecture is documented and understood by the team.",
        recommendation: "Document your architecture and keep it up to date.",
      },
      {
        id: "arch_4",
        text: "We actively manage and reduce technical debt.",
        recommendation: "Schedule regular refactoring and tech debt reviews.",
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
      },
      {
        id: "sec_2",
        text: "User data is stored and transmitted securely.",
        recommendation: "Ensure encryption at rest and in transit.",
      },
      {
        id: "sec_3",
        text: "We regularly review access permissions and credentials.",
        recommendation: "Audit access controls and rotate credentials regularly.",
      },
      {
        id: "sec_4",
        text: "We have a process for handling security vulnerabilities.",
        recommendation: "Define a vulnerability disclosure and response process.",
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
      },
      {
        id: "test_2",
        text: "We test new features before releasing them to users.",
        recommendation: "Introduce a staging environment and QA process.",
      },
      {
        id: "test_3",
        text: "We track and respond to bugs in a timely manner.",
        recommendation: "Use an issue tracker and define SLAs for bug resolution.",
      },
      {
        id: "test_4",
        text: "Our system has defined uptime and reliability targets.",
        recommendation: "Define SLOs and measure them continuously.",
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
      },
      {
        id: "devops_2",
        text: "Our deployment process is automated.",
        recommendation: "Automate builds, tests, and deployments.",
      },
      {
        id: "devops_3",
        text: "We can roll back a release if something goes wrong.",
        recommendation: "Implement versioned deployments with rollback support.",
      },
      {
        id: "devops_4",
        text: "Infrastructure is version controlled and reproducible.",
        recommendation: "Adopt Infrastructure as Code practices.",
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
      },
      {
        id: "data_2",
        text: "We have visibility into errors and exceptions.",
        recommendation: "Integrate an error tracking tool such as Sentry.",
      },
      {
        id: "data_3",
        text: "We use data to make product decisions.",
        recommendation: "Introduce analytics to track user behaviour.",
      },
      {
        id: "data_4",
        text: "We have a backup and recovery plan for our data.",
        recommendation: "Implement automated backups and test recovery regularly.",
      },
    ],
  },
];