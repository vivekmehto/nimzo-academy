import { Layers, Laptop, Users } from "lucide-react";

export const  programs = [
  {
    id: "hybrid",
    featured: true,
    icon: Layers,
    title: "Hybrid Chess Program",
    description:
   "A balanced mix of online learning and offline practice for steady, long-term improvement competitive play and skill mastery.",

    idealFor: [
      "Faster structured progress",
      "Busy families",
      "Long-term development",
    ],
    outcome: "Fastest and most consistent improvement",
    includes: [
      "Weekly Online Training",
      "Offline Practice Sessions",
    ],
  },
  {
    id: "online",
    icon: Laptop,
    title: "Online Chess Classes",
    description:
      "Live, interactive chess classes designed to build strong fundamentals while children learn comfortably from home.",
    idealFor: [
      "Kids aged 6+",
      "Busy family schedules",
      "Building strong chess basics",
    ],
    outcome: "Improves consistency, focus, and confidence",
    includes: [
      "One-on-One Online Coaching",
      "Small Group Online Classes",
    ],
  },
  {
    id: "offline",
    icon: Users,
    title: "Offline Chess Classes",
    description:
      "Classroom-based chess learning focused on discipline, real-board practice, and deeper conceptual understanding.",
    idealFor: [
      "In-person learners",
      "Improving focus and discipline",
      "Tournament preparation",
    ],
    outcome: "Strengthens discipline and board vision",
    includes: [
      "One-on-One Offline Coaching",
      "Offline Group Classes",
    ],
  },
];
