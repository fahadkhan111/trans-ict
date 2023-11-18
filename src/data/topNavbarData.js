import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineClockCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

export const ContactItemsData = [
  {
    icon: <BsTelephone color="white" />,
    text: "Have any Question?",
    link: "#",
  },
  {
    icon: <HiOutlineMail color="white" />,
    text: "Mail Us: info@tronix.com",
    link: "#",
  },
  {
    icon: <AiOutlineClockCircle color="white" />,
    text: "Mon - Fri: 8:00AM - 6:00PM",
    link: "#",
  },
];

export const FollowUsData = [
  {
    icon: <BiLogoFacebook color="white" size={18} />,
    link: "#",
  },
  {
    icon: <AiOutlineInstagram color="white" size={18} />,
    link: "#",
  },
  {
    icon: <AiOutlineTwitter color="white" size={18} />,
    link: "#",
  },
  {
    icon: <BiLogoLinkedin color="white" size={18} />,
    link: "#",
  },
];
