import { FC } from "react";
import NextImage from "../next-image";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { getBannerLayoutData } from "@/lib/fetch-data";
import SearchBar from "./search-bar";

interface Props {}

const Hero: FC<Props> = async (props): Promise<JSX.Element> => {
  const layoutData = await getBannerLayoutData();

  return (
    <div className="container grid grid-cols-2 gap-10 mt-28 max-[1000px]:grid-cols-1">
      <div className="w-[80%] max-w-[500px] aspect-square relative mx-auto">
        <NextImage src={layoutData.image.url} alt="Hero banner" priority />
        <div className="hero-animation w-full h-full absolute -z-10 rounded-full transition"></div>
      </div>

      <div className="w-[90%] mx-auto flex flex-col justify-center">
        <h1 className="capitalize dark:text-dark_text text-tertiary text-4xl leading-[60px] font-semibold">
          {layoutData.title.substring(0, 13)}
          <span className="text-gradient">
            {layoutData.title.substring(13, 28)}
          </span>
          {layoutData.title.substring(28)}
        </h1>
        <p className="dark:text-[#edfff4] text-[#000000ac] text-medium mt-6">
          {layoutData.subTitle}
        </p>

        <SearchBar />

        <div className="mt-4 flex items-center gap-2">
          <div className="w-10 aspect-square relative rounded-full overflow-hidden">
            <NextImage
              src="/assets/images/home-page/client-1.jpg"
              alt="Client 1"
            />
          </div>
          <div className="w-10 aspect-square relative rounded-full overflow-hidden -ml-5">
            <NextImage
              src="/assets/images/home-page/client-2.jpg"
              alt="Client 2"
            />
          </div>
          <div className="w-10 aspect-square relative rounded-full overflow-hidden -ml-5">
            <NextImage
              src="/assets/images/home-page/client-3.jpg"
              alt="Client3"
            />
          </div>
          <p className="font-josefin text-slate-700 dark:text-dark_text">
            500K+ People already trusted us.&nbsp;
            <Link href="/" className="text-gradient font-bold">
              View Courses
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
