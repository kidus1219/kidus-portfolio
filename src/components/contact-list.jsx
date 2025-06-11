import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const contacts = [
  {
    name: "Email",
    className: "bg-black hover:bg-yellow-600",
    href: "mailto:thebitsengineer@gmail.com",
    icon: faEnvelope,
  },
  {
    name: "Telegram",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://t.me/theBitsEngineer",
    icon: faTelegram,
  },
  {
    name: "Linkedin",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://www.linkedin.com/in/kidus1219/",
    icon: faLinkedin,
  },
  {
    name: "Github",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://github.com/kidus1219",
    icon: faGithub,
  },
];

export default function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}) {
  return (
    <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className
                )}
                asChild
                aria-label={contact.name}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  <FontAwesomeIcon icon={contact.icon} className="size-6" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
}
