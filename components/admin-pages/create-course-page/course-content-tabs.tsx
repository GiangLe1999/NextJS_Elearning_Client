import { FC, useState } from "react";

interface Props {
  prerequisites: { title: string }[];
  forWho: { title: string }[];
  description: string;
}

const panelItemClasses =
  "grid place-items-center py-3 cursor-pointer font-semibold text-slate-500 dark:text-dark_text";

const activePanelItemClasses =
  "border-b-[2px] border-secondary text-gradient !font-bold";

const CourseContentTabs: FC<Props> = ({
  prerequisites,
  description,
  forWho,
}): JSX.Element => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="bg-[#fbfafa] dark:bg-slate-800 grid grid-cols-3 custom-shadow">
        <div
          className={`${panelItemClasses} ${
            active === 0 && activePanelItemClasses
          }`}
          onClick={() => setActive(0)}
        >
          Overview
        </div>
        <div
          className={`${panelItemClasses} ${
            active === 1 && activePanelItemClasses
          }`}
          onClick={() => setActive(1)}
        >
          Requirements
        </div>
        <div
          className={`${panelItemClasses} ${
            active === 2 && activePanelItemClasses
          }`}
          onClick={() => setActive(2)}
        >
          This Course For
        </div>
      </div>

      <div className="py-6 text-slate-500 dark:text-dark_text">
        {active === 0 && <div>{description}</div>}

        {active === 1 && (
          <ul className="list-disc ml-4 space-y-2">
            {prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite.title}</li>
            ))}
          </ul>
        )}

        {active === 2 && (
          <ul className="list-disc ml-4 space-y-2">
            {forWho.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CourseContentTabs;
