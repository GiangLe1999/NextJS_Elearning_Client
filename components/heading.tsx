import { FC } from "react";

interface Props {
  title?: string;
  description?: string;
}

const Heading: FC<Props> = ({ title, description }): JSX.Element => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
    </>
  );
};

export default Heading;
