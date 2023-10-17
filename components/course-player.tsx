import { FC } from "react";

interface Props {
  videoUrl: string;
  title: string;
}

const CoursePlayer: FC<Props> = ({ videoUrl, title }): JSX.Element => {
  return (
    <div className="w-full mx-auto aspect-video border-b">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoUrl}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CoursePlayer;
