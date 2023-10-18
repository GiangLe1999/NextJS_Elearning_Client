import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import CoursePlayer from "../course-player";
import CourseLectureList from "./course-lecture-list";
import CourseLectureNavigator from "./course-lecture-navigator";
import { BiSolidArrowToLeft } from "react-icons/bi";
import LectureTabContent from "./lecture-tab-content";
import { ICourseData } from "@/types";

interface Props {
  courseId: string;
  courseData: ICourseData[];
  activeVideo: number;
  setActiveVideo: Dispatch<SetStateAction<number>>;
  refetch: any;
}

const CourseContentMedia: FC<Props> = ({
  courseId,
  courseData,
  activeVideo,
  setActiveVideo,
  refetch,
}): JSX.Element => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [iconHover, setIconHover] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeVideo]);

  return (
    <div className="mt-[62px]">
      <div
        className={`${
          openSidebar ? "w-[75%]" : "w-full"
        } transition-width max-[1100px]:w-full`}
      >
        <CoursePlayer
          title={courseData?.[activeVideo]?.title}
          videoUrl={courseData?.[activeVideo]?.videoUrl}
        />
      </div>

      <div className="container">
        <div
          className={`${
            openSidebar ? "w-[75%]" : "w-full"
          } transition-width max-[1100px]:w-full`}
        >
          <CourseLectureNavigator
            onlyNext={activeVideo === 0}
            onlyPrev={activeVideo === courseData?.length - 1}
            backHandler={() =>
              setActiveVideo(
                courseData && activeVideo === 0 ? activeVideo : activeVideo - 1
              )
            }
            nextHandler={() =>
              setActiveVideo(
                courseData && courseData.length - 1 === activeVideo
                  ? activeVideo
                  : activeVideo + 1
              )
            }
          />

          <h1 className="text-2xl font-semibold dark:text-dark_text mb-4">
            {courseData?.[activeVideo]?.title}
          </h1>

          <LectureTabContent
            courseId={courseId}
            refetch={refetch}
            courseData={courseData}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
          />
        </div>
      </div>

      <div
        className={`w-[25%] fixed top-[62px] right-0 h-full z-50 bg-white dark:bg-slate-900 border-l dark:border-slate-700 transition ${
          openSidebar
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } max-[1100px]:hidden`}
      >
        <CourseLectureList
          courseData={courseData}
          setOpenSidebar={setOpenSidebar}
          setIconHover={setIconHover}
          activeVideo={activeVideo}
          setActiveVideo={setActiveVideo}
        />
      </div>

      {!openSidebar && (
        <div
          className="fixed right-0 top-[30%] bg-slate-900 z-50 text-white flex items-center gap-1 border py-3 px-2 border-r-transparent cursor-pointer transition"
          style={{
            transform: !iconHover ? `translateX(75%)` : "translateX(0)",
          }}
          onMouseEnter={() => {
            setIconHover(true);
          }}
          onMouseLeave={() => setIconHover(false)}
          onClick={() => setOpenSidebar(true)}
        >
          <BiSolidArrowToLeft size={30} /> Course Content
        </div>
      )}
    </div>
  );
};

export default CourseContentMedia;
