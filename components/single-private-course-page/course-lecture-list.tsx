import { Dispatch, FC, SetStateAction } from "react";
import { ICourseData } from "../../../server/models/course.model";
import { AccordionWrapper } from "../accordion-materials";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import { formatVideoLength } from "@/lib/format-data";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BiSolidChevronDown } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

interface Props {
  courseData: ICourseData[];
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
  setIconHover: Dispatch<SetStateAction<boolean>>;
  activeVideo: number;
  setActiveVideo: Dispatch<SetStateAction<number>>;
}

const CourseLectureList: FC<Props> = ({
  courseData,
  setOpenSidebar,
  setIconHover,
  activeVideo,
  setActiveVideo,
}): JSX.Element => {
  const rawSections = new Set<string>(
    courseData.map((item) => item.videoSection)
  );

  const hasOrderCourseData = courseData.map((course, index) => ({
    ...course,
    order: index,
  }));

  const uniqueSections: string[] = [...rawSections];

  const videosBySection = uniqueSections.map((section) => ({
    section,
    videos: hasOrderCourseData.filter(
      (video) => video.videoSection === section
    ),
  }));

  return (
    <div className="overflow-y-scroll max-h-[calc(100%-62px)] no-scrollbar">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl p-4 pb-2">Course Content</h2>
        <IoClose
          size={25}
          className="cursor-pointer mr-[13px] mt-1"
          onClick={() => {
            setOpenSidebar(false);
            setIconHover(false);
          }}
        />
      </div>
      <div className="flex items-center gap-2 text-[15px] mb-2"></div>
      <div className="lecture-list-accordion">
        {videosBySection.map((section, index) => (
          <AccordionWrapper
            key={index}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
          >
            <AccordionSummary
              aria-controls={`panel${{ index }}d-content`}
              id={`panel${{ index }}d-header`}
            >
              <div className="relative w-full h-full">
                <div className="flex items-start justify-between">
                  <span className="font-semibold">
                    Section {index + 1} : {section.section}
                  </span>
                  <BiSolidChevronDown className="mt-1" />
                </div>
                <span className="text-xs text-tertiary dark:text-dark_text">
                  {section.videos.length} Lectures |{" "}
                  {formatVideoLength(
                    section.videos.reduce(
                      (acc, cur) => acc + cur.videoLength,
                      0
                    )
                  )}{" "}
                </span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {section.videos.map((video, videoIndex: number) => (
                <div
                  key={videoIndex}
                  className={`cursor-pointer py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-900 transition ${
                    video.order === activeVideo
                      ? "bg-slate-200 dark:bg-slate-900"
                      : "bg-white dark:bg-slate-600"
                  }`}
                  onClick={() => setActiveVideo(video.order)}
                >
                  <p>{video.title}</p>
                  <span className="text-xs flex items-center gap-1 mt-2">
                    <MdOutlineOndemandVideo className="-mt-[2px]" />
                    {formatVideoLength(video.videoLength)}
                  </span>
                </div>
              ))}
            </AccordionDetails>
          </AccordionWrapper>
        ))}
      </div>
    </div>
  );
};

export default CourseLectureList;
