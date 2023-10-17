import Link from "next/link";
import { FC } from "react";
import { GiBookCover } from "react-icons/gi";

interface Props {}

const Logo: FC<Props> = (props): JSX.Element => {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 text-[25px] font-bold text-tertiary text-gradient py-3`}
    >
      <GiBookCover size={28} className="-mt-1 text-[#3d8fc0]" /> E-Learning
    </Link>
  );
};

export default Logo;
