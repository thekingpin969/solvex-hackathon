import { Benefit, Objective, ScheduleItem } from "./types";
import { Lightbulb, Users, Layers, Rocket, GraduationCap } from "lucide-react";

export const OBJECTIVES: Objective[] = [
  { id: 1, title: "Innovate", description: "Encourage innovation and creative thinking among students." },
  { id: 2, title: "Solve", description: "Provide hands-on exposure to solving real-world problems using technology." },
  { id: 3, title: "Collaborate", description: "Promote teamwork, leadership, and collaborative development." },
  { id: 4, title: "Bridge", description: "Bridge the gap between theoretical knowledge and practical application." },
  { id: 5, title: "Develop", description: "Foster an entrepreneurial and research-oriented mindset." },
];

export const BENEFITS: Benefit[] = [
  { id: 1, text: "Opportunity to work on real-world problem statements." },
  { id: 2, text: "Mentorship from experienced faculty and industry experts." },
  { id: 3, text: "Hands-on experience in building functional prototypes." },
  { id: 4, text: "Networking opportunities with peers and innovators." },
  { id: 5, text: "Certificates of participation and recognition for top-performing teams." },
];

export const EVENT_DETAILS = {
  name: "SolveX 2026",
  tagline: "The 24 Hours Innovation Hackathon",
  date: "9th & 10th January 2026",
  duration: "24 Hours",
  venue: "MGM College of Engineering and Pharmaceutical Sciences",
  organizer: "MIDEA - Innovation Club",
};

export const MOCK_SCHEDULE: ScheduleItem[] = [
  { day: "Day 1", title: "Kickoff & Ideation", desc: "Jan 9th - Opening Ceremony, Problem Statement Release, Ideation Phase Begins." },
  { day: "Day 1", title: "Prototyping", desc: "Jan 9th (Evening) - Mentorship Rounds, Core Development, Midnight Review." },
  { day: "Day 2", title: "Final Polish", desc: "Jan 10th (Morning) - Pitch Prep, Final Commits, Prototype Testing." },
  { day: "Day 2", title: "Judging & Awards", desc: "Jan 10th (Afternoon) - Final Presentations, Evaluation, Prize Distribution." },
];
