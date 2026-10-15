// All site copy lives here so you can edit text without touching layout code.

export const profile = {
  name: "Sarunpat Promthong",
  role: "Software developer",
  location: "Thailand",
  intro:
    "I build web apps people log into and pay through. For the past two years I've shipped sign-up, login and checkout for an online course platform, plus tools that school staff use every day.",
  email: "sarunpatpr.work@gmail.com",
  github: "https://github.com/Sarunpat-Promthong",
  githubHandle: "Sarunpat-Promthong",
};

export type Step = { img: string; title: string; detail: string; alt: string };

// The flow shown in the hero: a real user path through Hipsbook.
export const flow: Step[] = [
  {
    img: "shots/signup.webp",
    title: "Sign up",
    detail: "Registration form for email, name, phone and birthday, with inline validation and clear error states.",
    alt: "Hipsbook sign-up screen with email, first name, last name, phone and birthday fields",
  },
  {
    img: "shots/otp.webp",
    title: "Verify email",
    detail: "Six-digit OTP input with a countdown and resend, wired to the auth API.",
    alt: "Hipsbook email verification screen with six OTP boxes and a countdown timer",
  },
  {
    img: "shots/home.webp",
    title: "Browse",
    detail: "Storefront with banners, categories and course rows loaded from the catalog API.",
    alt: "Hipsbook home screen with a course banner, category chips and course cards",
  },
  {
    img: "shots/course-paid.webp",
    title: "Buy",
    detail: "Buy the whole course from its detail page, or single lessons from the lesson list. Both hand off to the payment API.",
    alt: "Speed Picking guitar course detail screen with a ฿1,490 price and a Buy course button",
  },
];

export const hipsbook = {
  name: "Hipsbook",
  url: "https://www.hipsbook.com",
  employer: "Gby Digital Tech Co., Ltd.",
  period: "Oct 2024 – present",
  summary:
    "A Thai online course and skill-assessment platform covering music, cooking and school subjects, with free and paid courses, per-lesson purchases, sheet music and live classes. It runs as a Next.js website and a React Native mobile app.",
  did: [
    "Built the sign-up, login and checkout flows in Next.js and TypeScript, covering form validation, UI state and error handling.",
    "Integrated the backend authentication and payment APIs into those flows.",
    "Built the storefront and course-catalog pages: search, category rows, course detail with lessons, documents and reviews.",
  ],
  stack: ["Next.js", "React Native", "TypeScript", "React", "Tailwind CSS", "REST APIs"],
  gallery: [
    { img: "shots/signup-2.webp", caption: "Sign-up form: password rules and terms before the account is created", alt: "Bottom of the Hipsbook sign-up form with password rules, confirm password, a terms checkbox and a disabled sign-up button" },
    { img: "shots/signin.webp", caption: "Sign in with email or Google, X, LINE and Apple", alt: "Hipsbook sign-in screen with email, password and social login buttons" },
    { img: "shots/forgot.webp", caption: "Forgot password: reset by email", alt: "Hipsbook forgot-password screen with an email field and a reset button" },
    { img: "shots/catalog.webp", caption: "Course catalog with search and filters", alt: "Hipsbook list of all courses with search bar" },
    { img: "shots/lessons-paid.webp", caption: "Buy single lessons: each locked lesson has its own price", alt: "Lesson list where each locked lesson shows its own buy button, ฿23 and ฿20" },
    { img: "shots/player.webp", caption: "Lesson player with All, Unlocked and Buy more tabs", alt: "Hipsbook video lesson player above a list of saxophone lessons, one unlocked and one with a ฿20 buy button" },
    { img: "shots/live.webp", caption: "Live classes: now live, recommended, following", alt: "Hipsbook live page with search, filter chips and an empty state" },
    { img: "shots/go-live.webp", caption: "Go-live setup: camera check, cover, title, audience", alt: "Hipsbook start-live form with camera preview, cover upload, title, description and visibility options" },
  ],
};

export type Project = {
  name: string;
  org: string;
  period: string;
  what: string;
  points: string[];
  stack: string[];
};

export const otherWork: Project[] = [
  {
    name: "Symphony Music and Art School",
    org: "Gby Digital Tech",
    period: "Oct 2024 – present",
    what: "Internal school-management system",
    points: [
      "Vue app that staff use every day to record student attendance and schedule classes.",
      "Replaced a paper-based process.",
    ],
    stack: ["Vue", "JavaScript"],
  },
  {
    name: "IMPACT Exhibition Management",
    org: "Cooperative student",
    period: "May – Dec 2023",
    what: "Four internal and public systems",
    points: [
      "Job-application system for the I'M Challenger program.",
      "CMS for the IMPACT TO YOU platform.",
      "Employee-satisfaction and restaurant-evaluation systems for IMPACT's restaurant operations.",
    ],
    stack: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Web", items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Tailwind CSS", "Bootstrap"] },
  { group: "Mobile", items: ["React Native"] },
  { group: "Backend & data", items: ["Node.js", "Python", "REST APIs", "MySQL", "MongoDB", "Firebase"] },
  { group: "Testing & tools", items: ["Git", "Postman", "Swagger", "JMeter", "k6", "VS Code"] },
];

export const education = {
  school: "Walailak University",
  degree: "B.Sc. Information Technology and Digital Innovation",
  years: "2020 – 2023",
  gpa: "3.83",
};

export const languages = "Thai (native), English (reading: good; speaking and writing: fair)";
