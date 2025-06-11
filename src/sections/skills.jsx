import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";

// Programming Language icons
import pythonIcon from "@/assets/icons/python.png";
import javascriptIcon from "@/assets/icons/javascript.png";
import javaIcon from "@/assets/icons/java.png";
import cPlusPlusIcon from "@/assets/icons/cPlusPlus.svg";
import phpIcon from "@/assets/icons/php.png";

// Stacks and Frameworks icons
import djangoIcon from "@/assets/icons/django.svg";
import reactIcon from "@/assets/icons/react.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressjsIcon from "@/assets/icons/express-js.png";
import tailwindcssIcon from "@/assets/icons/tailwindcss.png";
import shadcnuiIcon from "@/assets/icons/shadcn-ui.png";
import ptbIcon from "@/assets/icons/ptb.png";
import flaskIcon from "@/assets/icons/Flask.svg";
import fastapiIcon from "@/assets/icons/FastAPI.svg";
import reduxIcon from "@/assets/icons/Redux.svg";
import pixijsIcon from "@/assets/icons/pixijs.svg";

// Databases and ORMs icons
import sqlalchemyIcon from "@/assets/icons/SQLAlchemy.svg";
import prismaIcon from "@/assets/icons/prisma.png";
import postgresIcon from "@/assets/icons/postgres.png";
import mysqlIcon from "@/assets/icons/mysql.svg";
import mongodbIcon from "@/assets/icons/mongoDB.svg";
import firebaseIcon from "@/assets/icons/firebase.svg";
import djangoOrmIcon from "@/assets/icons/djangoOrm.png";

// Development Tools icons
import viteIcon from "@/assets/icons/vite.png";
import pnpmIcon from "@/assets/icons/pnpm.png";
import postmanIcon from "@/assets/icons/postman.svg";
import webpackIcon from "@/assets/icons/Webpack.svg";
import gitIcon from "@/assets/icons/git.png";

// DevOps icons
import dockerIcon from "@/assets/icons/docker.png";
import githubActionsIcon from "@/assets/icons/github-actions.png";
import linuxIcon from "@/assets/icons/linux.svg";
import digitalOceanIcon from "@/assets/icons/DigitalOcean.svg";
import herokuIcon from "@/assets/icons/Heroku.svg";

export default function skills() {
  // Skills data organized by categories
  const data = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          icon: pythonIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "Java",
          icon: javaIcon,
        },
        {
          name: "C++",
          icon: cPlusPlusIcon,
        },
        {
          name: "Php",
          icon: phpIcon,
        },
      ],
    },
    {
      title: "Stacks and Frameworks",
      skills: [
        {
          name: "Django",
          icon: djangoIcon,
        },
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Node.js",
          icon: nodejsIcon,
        },
        {
          name: "Express.js",
          icon: expressjsIcon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },

        {
          name: "shadcn/ui",
          icon: shadcnuiIcon,
        },
        {
          name: "Python Telegram Bot",
          icon: ptbIcon,
        },
        {
          name: "Flask",
          icon: flaskIcon,
        },
        {
          name: "FastAPI",
          icon: fastapiIcon,
        },
        {
          name: "Redux",
          icon: reduxIcon,
        },
        {
          name: "PixiJS",
          icon: pixijsIcon,
        },
      ],
    },
    {
      title: "Databases and ORMs",
      skills: [
        {
          name: "Sqlalchemy",
          icon: sqlalchemyIcon,
        },
        {
          name: "Prisma ORM",
          icon: prismaIcon,
        },
        {
          name: "PostgreSQL",
          icon: postgresIcon,
        },
        {
          name: "MySQL",
          icon: mysqlIcon,
        },
        {
          name: "MongoDB",
          icon: mongodbIcon,
        },
        {
          name: "Firebase",
          icon: firebaseIcon,
        },
        {
          name: "Django ORM",
          icon: djangoOrmIcon,
        },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        {
          name: "Vite",
          icon: viteIcon,
        },
        {
          name: "PNPM",
          icon: pnpmIcon,
        },
        {
          name: "Postman",
          icon: postmanIcon,
        },

        {
          name: "Webpack",
          icon: webpackIcon,
        },
        {
          name: "Git",
          icon: gitIcon,
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Docker",
          icon: dockerIcon,
        },
        {
          name: "GitHub Actions",
          icon: githubActionsIcon,
        },
        {
          name: "Linux",
          icon: linuxIcon,
        },
        {
          name: "Digital Ocean",
          icon: digitalOceanIcon,
        },
        {
          name: "Heroku",
          icon: herokuIcon,
        },
      ],
    },
  ];

  return (
    // Skills section container
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      {/* Section heading with animation */}
      <MotionDiv>
        <h1 className="mb-2 md:mb-6 text-3xl font-extrabold underline underline-offset-4 text-green-500 font-geist-mono">
          Skills
        </h1>
      </MotionDiv>

      {/* Skill categories container */}
      <div className="flex flex-col justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:mb-14 md:px-2">
              {/* Category title */}
              <h3 className="mb-8 opacity-80">{item.title}</h3>

              {/* Animated list of skills */}
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

/**
 * Individual skill card component
 * @param icon - Path to the skill icon
 * @param name - Name of the skill
 */
function SkillCard({ icon, name }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <img src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
