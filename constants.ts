import { Benefit, Objective, ScheduleItem, Speaker } from "./types";
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
  { day: "Day 1", title: "Kickoff and Orientation", desc: "Jan 9th - Opening Ceremony and Team Formation." },
  { day: "Day 2", title: "Building and Collaborating", desc: "Jan 10th - Intensive Development and Mentorship." },
  { day: "Day 3", title: "Presentation and Judging", desc: "Jan 11th - Final Pitches and Prize Distribution." },
];

export const SPEAKERS: Speaker[] = [
  { 
    id: 1, 
    name: "Miracle Korsgaard", 
    role: "CEO & COO at Zonlo", 
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    name: "Davis George", 
    role: "Co-Founder at Pino", 
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    name: "Ryan Dias", 
    role: "Founder at Plun", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    name: "Kierra Culhane", 
    role: "CEO & Co-Founder at Z", 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
  },
];