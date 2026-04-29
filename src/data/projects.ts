import { log } from "console";

export const projects = [
  {
    id: 1,
    title: "Prospo",
    description:
      "Built an insight-driven client discovery platform that helps freelancers find potential clients, understand their needs, and approach them with smarter outreach instead of waiting for jobs on traditional freelance platforms.",
    
    features: [
      "AI-assisted client opportunity discovery",
      "Specialty-based lead matching",
      "Insight-driven outreach suggestions",
      "Clean dashboard for managing opportunities",
      "Personalized cold message generation",
      "Freelancer-focused onboarding experience"
    ],
    howBuilding: [
      "Situation: Many freelancers struggle to get clients because traditional platforms favor users with strong profiles, reviews, and previous experience, making it difficult for new freelancers to compete.",
      
      "Task: Build a modern platform that helps freelancers proactively discover businesses that may need their services and approach them with more confidence and context.",
      
      "Action: Designed and developed a lightweight CRM-style workflow for freelancers, implemented specialty-based lead discovery logic, structured company insights, and outreach generation features using Next.js, Tailwind CSS, shadcn/ui, and AI-assisted workflows."
    ],
    links: {
      live: "https://prospo.app",
      github: "",
      design: "",
    },
    logo: "/logos/prospo.png",

    images: [
      "/images/prospo-1.png",
      "/images/prospo-2.png",
      "/images/prospo-3.png",
    ]
  },
  {
    id: 3,
    title: "UniLinks",
    description:
      "Designed and built a unified payment link platform to reduce payment friction for freelancers and businesses by consolidating multiple payment methods into a single, secure, shareable link.",
    features: [
      "Single payment link supporting multiple payment methods",
      "Disposable crypto wallet addresses for privacy",
      "Real-time payment status tracking",
      "Link expiration and automatic disable",
      "Clean, trust-focused payment pages"
    ],
    howBuilding: [
      "Situation: Freelancers and businesses struggle with fragmented payment flows, often sharing multiple bank details, wallet addresses, and links.",
      "Task: Build a focused solution that simplifies how users request and receive payments while improving trust and clarity.",
      "Action: Designed a minimal payment flow, implemented multi-method payment support, added disposable crypto addresses for security, and built a simple dashboard for tracking payment status."
    ],
    links: {
      live: "https://unilinks-six.vercel.app/",
      github: "https://github.com/abel-otegbola/Unilinks",
      design: "https://dribbble.com/shots/27116267-Unilinks-Get-Paid-Anywhere-With-One-Secure-Link",
    },
    logo: "/logos/unilinks.png",
    images: [
      "/images/unilinks-1.png",
      "/images/unilinks-2.png",
      "/images/unilinks-3.png",
    ]
  },
  {
    id: 2,
    title: "Campuxmart",
    description:
      "Designed and developed a campus-focused marketplace platform that enables students to easily buy, sell, and discover products within their university communities through a secure and user-friendly experience.",

    features: [
      "Clean and intuitive marketplace interface",
      "Campus-based product discovery and categories",
      "Vendor profiles, ratings, and trust-focused interactions",
      "Responsive product listing and browsing experience",
      "Structured user flows optimized for student commerce"
    ],

    howBuilding: [
      "Situation: Many students relied on scattered social media posts and informal channels to buy or sell products on campus, creating issues around trust, visibility, and convenience.",

      "Task: Design and build a modern marketplace experience tailored specifically for university students, with a strong focus on usability, accessibility, and community trust.",

      "Action: Conducted research around student buying behavior, designed intuitive user journeys and marketplace interactions, and developed the platform using modern frontend technologies with emphasis on responsive design, clean UI systems, and seamless user experience."
    ],

    links: {
      live: "https://campuxmart.com",
      github: "",
      design: "",
    },
    logo: "/logos/campuxmart.png",
    images: [
      "/images/campuxmart-3.png",
      "/images/campuxmart-2.png",
      "/images/campuxmart-1.png",
    ]
  },
  // {
  //   id: 4,
  //   title: "Bos Unlimited",
  //   description:
  //     "Worked on a fashion ecommerce platform focused on customizable clothing and a clean shopping experience across devices.",
  //   features: [
  //     "Product customization options",
  //     "Clean, modern ecommerce layout",
  //     "Secure checkout experience"
  //   ],
  //   howBuilding: [
  //     "Situation: The brand needed an ecommerce platform that allowed customers to personalize fashion items while maintaining a clean UX.",
  //     "Task: Design and implement a responsive ecommerce experience with customization features.",
  //     "Action: Collaborated with designers, implemented interactive customization flows, integrated inventory and order systems, and optimized the UI for mobile and desktop."
  //   ],
  //   links: {
  //     live: "https://bosunlimited.netlify.app",
  //     github: "",
  //     design: "",
  //   },
  //   images: [
  //     "/images/bos-light.webp",
  //     "/images/bos-dark.webp",
  //   ]
  // },
  // {
  //   id: 5,
  //   title: "FlashTasks",
  //   description:
  //     "Designed and developed a lightweight task and idea management tool to help users capture and organize thoughts quickly without the complexity of traditional productivity apps.",
  //   features: [
  //     "Fast, lightweight UI",
  //     "Intuitive layout for quick task capture",
  //     "Mobile-first responsive design",
  //     "Smooth animations and interactions"
  //   ],
  //   howBuilding: [
  //     "Situation: Most productivity tools are cluttered and slow for capturing simple tasks or ideas.",
  //     "Task: Create a minimal task manager optimized for speed, clarity, and ease of use.",
  //     "Action: Designed a streamlined UI and built the application using React and Tailwind, focusing on fast interactions, responsive layouts, and minimal friction."
  //   ],
  //   links: {
  //     live: "https://flashtasks.app",
  //     github: "",
  //     design: "",
  //   },
  //   images: [
  //     "/images/flashnotes.webp"
  //   ]
  // },
];