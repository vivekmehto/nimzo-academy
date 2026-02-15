import { Layers, Laptop, Users } from "lucide-react";

export const programs = [
  {
    id: "hybrid",
    featured: true,
    icon: Layers,
    title: "Hybrid Chess Program",
    description:
      "A structured blend of online coaching and offline practice designed for consistent improvement and long-term competitive growth.",

    idealFor: [
      "Students balancing academics and activities",
      "Learners seeking flexible yet structured training",
      "Serious long-term development",
    ],

    outcome: "Consistent performance growth and tournament readiness",

    includes: [
      "Weekly Live Online Coaching",
      "Structured Offline Practice Sessions",
    ],
  },

  {
    id: "online",
    icon: Laptop,
    title: "Online Chess Classes",
    description:
      "Interactive live chess training that builds strong fundamentals, strategic thinking, and confidence — all from home.",

    idealFor: [
      "Children aged 6+",
      "Home-based structured learning",
      "Building strong chess foundations",
    ],

    outcome: "Improved focus, consistency, and decision-making skills",

    includes: [
      "One-on-One Online Coaching",
      "Small Group Interactive Classes",
    ],
  },

  {
    id: "offline",
    icon: Users,
    title: "Offline Chess Classes",
    description:
      "In-person classroom training focused on discipline, real-board mastery, and deeper tactical understanding for competitive play.",

    idealFor: [
      "In-person learners",
      "Developing discipline and concentration",
      "Preparing for tournaments",
    ],

    outcome: "Stronger board vision and competitive confidence",

    includes: [
      "One-on-One Classroom Coaching",
      "Structured Group Training Sessions",
    ],
  },
];
