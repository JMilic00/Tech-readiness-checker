import { Section } from "@/types/assessment";

export const sections: Section[] = [
  {
    id: "strategy",
    title: "Strategy",
    questions: [
      {
        id: "q1",
        text: "We have a clearly defined tech strategy.",
        weight: 2,
        recommendation: "Define a clear tech strategy aligned with business goals.",
      },
      {
        id: "q2",
        text: "Leadership supports tech initiatives.",
        weight: 1,
        recommendation: "Improve leadership alignment with tech initiatives.",
      },
      {
        id: "q3",
        text: "We invest in long-term tech planning.",
        weight: 2,
        recommendation: "Allocate resources for long-term tech planning.",
      },
      {
        id: "q4",
        text: "We track tech performance with metrics.",
        weight: 1,
        recommendation: "Introduce measurable KPIs for tech performance.",
      },
    ],
  },
  {
    id: "team",
    title: "Team",
    questions: [
      {
        id: "q5",
        text: "We have skilled developers.",
        weight: 2,
        recommendation: "Invest in hiring or training developers.",
      },
      {
        id: "q6",
        text: "We follow coding best practices.",
        weight: 1,
        recommendation: "Introduce code reviews and standards.",
      },
      {
        id: "q7",
        text: "We have clear team roles.",
        weight: 1,
        recommendation: "Define clear roles and responsibilities.",
      },
      {
        id: "q8",
        text: "We invest in continuous learning.",
        weight: 2,
        recommendation: "Encourage continuous education and training.",
      },
    ],
  },
];