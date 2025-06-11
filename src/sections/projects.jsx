import FramerWrapper from "@/components/animation/FramerWrapper";
import ProjectCards from "@/components/ProjectsCard";
import MotionDiv from "@/components/motion-div";

const projectList = [
  {
    title: "Tirunesh Bejing Hospital - Smart MCH System",
    description:
      "A maternal and child health platform for hospitals, supporting antenatal and postnatal care, doctor visits, vaccination tracking, and digital health records. Integrated with a Telegram bot for booking appointments, chatting with doctors, and accessing key services. Built for scalability and secure medical data management.",
    tags: [
      "React",
      "NodeJs",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Django",
      "PythonTelegramBot",
    ],
    link: "https://github.com/nata-t",
    source: "https://github.com/nata-t",
  },
  {
    title: "Hagurash – Food Delivery Platform",
    description:
      "A fast and reliable delivery platform with dedicated portals for customers, stores, deliverers, and admins—offering seamless order management, tracking, and communication.",
    tags: ["React", "PostgreSQL", "Django", "PythonTelegramBot"],
    link: "https://github.com/nata-t",
    source: "https://github.com/nata-t",
  },
  {
    title: "Volkscity - A brand new social media platform",
    description:
      "A social media platform inspired by Reddit, featuring Pieces (posts), Threads (discussions), Communities, Crowns (badges), and more. VolksCity empowers users to share content, engage in conversations, and build vibrant communities around shared interests.",
    tags: ["React", "Redux", "PostgreSQL", "Django"],
    link: "https://github.com/nata-t",
    source: "https://github.com/nata-t",
  },
  {
    title: "Boss Burger – ERP Management System",
    description:
      "An ERP system built for Boss Burger to manage staff roles, handle orders and expenses, validate mobile payments via transaction scraping, and support real-time updates via WebSockets.",
    tags: ["React", "React Query", "Express", "Prisma", "Socket.IO", "MySQL"],
    link: "https://github.com/nata-t",
    source: "https://github.com/nata-t",
  },
  {
    title: "Jewelry Shop – Management Dashboard",
    description:
      "A dual-purpose platform with a landing page for customers and a dashboard for store management. Focused on UI/UX and frontend design.",
    tags: ["Vue", "GSAP", "Vuex", "PrimeVue", "Figma"],
    link: "https://github.com/nata-t",
    source: "https://github.com/nata-t",
  },
  {
    title: "School Management System – Cloud-Based Solution",
    description:
      "A full-featured school system with dashboards for teachers, students, and admins. Includes messaging, scheduling, payment, and registration functionalities.",
    tags: [
      "React",
      "Shadcn UI",
      "React Query",
      "TanStack Router",
      "TanStack Table",
      "Zod",
    ],
    link: "https://github.com/nata-t",
    source: "https://github.com/nata-t",
  },
  {
    title: "Wallet Note - Expense tracker",
    description:
      "A user-friendly expense tracker Telegram Bot designed to help you manage your finances effortlessly. It features easy expense tagging, detailed analytics, exproting data, and intuitive budgeting tools.",
    tags: ["React", "PythonTelegramBot"],
    link: "https://github.com/nata-t",
    source: "https://github.com/nata-t",
  },
  {
    title: "Damacase - Ethiopia-themed game",
    description:
      "An engaging Ethiopian-themed arcade web game that combines fun gameplay with cultural elements.Players experience fast-paced challenges infused with Ethiopian culture, blending exciting gameplay with authentic local themes.",
    tags: ["PixiJs"],
    link: "https://github.com/nata-t",
    source: "https://github.com/nata-t",
  },
];

const projectsPage = () => {
  return (
    // PROJECT PAGE
    <div
      id="projects"
      className="relative flex h-full w-full flex-col items-center gap-5 overflow-hidden"
    >
      <MotionDiv>
        <h1 className="mb-2 md:mb-6 text-3xl font-extrabold underline underline-offset-4 text-green-500 font-geist-mono">
          Projects
        </h1>
      </MotionDiv>
      <div className="flex flex-col gap-3 md:mb-8">
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins w-full text-lg text-primary max-sm:text-base">
            A curated collection of my projects showcasing high-quality
            solutions, technical expertise, and innovative problem-solving.
          </p>
        </FramerWrapper>
      </div>

      <div className=" flex w-full flex-row flex-wrap gap-3 max-lg:flex-col">
        {projectList.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
