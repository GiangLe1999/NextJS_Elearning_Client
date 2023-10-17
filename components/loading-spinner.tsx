import { FC } from "react";
import { ImSpinner } from "react-icons/im";

interface Props {}

const LoadingSpinner: FC<Props> = (props): JSX.Element => {
  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center text-tertiary dark:text-dark_text">
      <ImSpinner className="animate-spin" size={50} />
      <p className="mt-2 text-xl">Loading ...</p>
    </div>
  );
};

export default LoadingSpinner;
