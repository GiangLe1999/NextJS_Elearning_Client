import { IconType } from "react-icons";
import { AiOutlineLogout } from "react-icons/ai";
import { GiBookmark, GiPadlock } from "react-icons/gi";
import { RiAdminLine } from "react-icons/ri";

export const profileItemsData: {
  icon: IconType;
  title: string;
  isLogout?: boolean;
}[] = [
  {
    icon: GiPadlock,
    title: "Change Password",
  },
  {
    icon: GiBookmark,
    title: "Enrolled Courses",
  },
  {
    icon: RiAdminLine,
    title: "Admin Dashboard",
  },
  {
    icon: AiOutlineLogout,
    title: "Log Out",
    isLogout: true,
  },
];
