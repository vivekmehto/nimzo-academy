import { Home, Laptop, MapPinned } from "lucide-react";

export const programs = [
  {
    id: "centres",
    featured: true,
    icon: MapPinned,
    title: "Centre Chess Classes",
    description:
      "Join regular in-person classes through Nimzo Academy’s Delhi class network for children who learn best with classroom rhythm and face-to-face coaching.",

    idealFor: [
      "Families near Dwarka or Rohini",
      "Children who benefit from in-person routine",
      "Students building consistency through class rhythm",
    ],

    outcome: "A dependable academy environment with coach-led structure",

    includes: [
      "Offline classes at Nimzo centres",
      "Clear level guidance and parent communication",
    ],
  },

  {
    id: "home",
    icon: Home,
    title: "Home Chess Coaching",
    description:
      "Coach-led home classes across select Delhi areas for families who prefer personal attention, less travel, and a calmer one-to-one or small-group setup.",

    idealFor: [
      "Busy Delhi families",
      "Children who focus better in a private setting",
      "Learners who need more personalised pacing",
    ],

    outcome: "More personal support without giving up structure",

    includes: [
      "Home coaching in select Delhi areas",
      "Flexible continuity with online support when needed",
    ],
  },

  {
    id: "online",
    icon: Laptop,
    title: "Online Chess Classes",
    description:
      "Live online coaching for children in India and around the world who want structured learning with scheduling flexibility and long-term continuity.",

    idealFor: [
      "Students outside Delhi",
      "International families",
      "Children who need strong coaching with schedule flexibility",
    ],

    outcome: "Consistent progress from anywhere in the world",

    includes: [
      "Live coach-led online sessions",
      "The same Nimzo teaching approach worldwide",
    ],
  },
];
