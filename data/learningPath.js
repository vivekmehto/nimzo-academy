import {
  Circle,
  Layers,
  TrendingUp,
  Award,
} from "lucide-react";

export const learningPath = [
  {
    id: "beginner",
    icon: Circle,
    title: "Beginner",
    subtitle: "Ideal for children starting their chess journey",
    points: [
      "48 guided training sessions",
      "12 tactical puzzle practice classes",
      "Online practice tournaments",
      "Study material & worksheets",
      "Class summary after every session",
      "Performance tracking & feedback",
    ],
  },
  {
    id: "intermediate",
    icon: Layers,
    title: "Intermediate",
    recommended: true,
    subtitle: "Best choice for students with basic chess knowledge",
    points: [
      "48 structured training sessions",
      "12 tactical improvement classes",
      "Opening principles & tactics",
      "Online tournaments",
      "Detailed study material",
      "Progress tracking",
    ],
  },
  {
    id: "advanced",
    icon: TrendingUp,
    title: "Advanced",
    subtitle: "For competitive and serious learners",
    points: [
      "48 advanced training sessions",
      "24 tactical solving classes",
      "24 online tournaments",
      "Positional & endgame training",
      "Game analysis reports",
      "Performance evaluation",
    ],
  },
  {
    id: "master",
    icon: Award,
    title: "Master",
    subtitle: "For tournament-focused players",
    points: [
      "48 high-level sessions",
      "Advanced opening preparation",
      "Tournament mindset training",
      "National & international prep",
      "Personal development roadmap",
      "One-on-one feedback",
    ],
  },
];
