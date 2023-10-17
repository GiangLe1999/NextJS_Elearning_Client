import { linkConstants } from "@/constants";
import { IconType } from "react-icons";
import { MdMail, MdPhone } from "react-icons/md";

type footerItemType = { title: string; link: string };

export const footerCol1: { title: string; content: string }[] = [
  { title: "BRC", content: "No.400077880 - Issued October 27, 2010" },
  {
    title: "Issuing agency",
    content:
      "Business registration office, Department of Planning and Investment of Dak Lak province",
  },
  {
    title: "Address",
    content: "16 Ma Hai Street, Tan Hoa Ward, Buon Ma Thuot City, Dak Lak",
  },
];

export const footerCol2: footerItemType[] = [
  { title: "Programming", link: linkConstants.privacy },
  { title: "Digital Marketing", link: linkConstants.privacy },
  { title: "Graphic Design", link: linkConstants.privacy },
  { title: "Machine Learning", link: linkConstants.privacy },
  { title: "Data Science", link: linkConstants.privacy },
  { title: "Computer Science", link: linkConstants.privacy },
  { title: "Arts and Humanities", link: linkConstants.privacy },
  { title: "Math and Logic", link: linkConstants.privacy },
  { title: "Language Learning", link: linkConstants.privacy },
  { title: "Health", link: linkConstants.privacy },
];

export const footerCol3: footerItemType[] = [
  { title: "Courses Dashboard", link: linkConstants.privacy },
  { title: "Help and Support", link: linkConstants.privacy },
  { title: "Blog", link: linkConstants.privacy },
  { title: "About Us", link: linkConstants.privacy },
];

export const footerCol32: footerItemType[] = [
  { title: "Privacy Policy", link: linkConstants.privacy },
  { title: "Terms of Use", link: linkConstants.privacy },
  {
    title: "Accessibility Statement",
    link: linkConstants.privacy,
  },
];

export const footerCol4: { title: string; link: string; icon: IconType }[] = [
  { title: "Hotline: 0962334807", link: "tel:0962334807", icon: MdPhone },
  {
    title: "legiangbmt09@gmail.com",
    link: "mailto:legiangbmt09@gmail.com",
    icon: MdMail,
  },
];
