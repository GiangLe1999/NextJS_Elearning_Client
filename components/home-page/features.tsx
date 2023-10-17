import { featuresItemsData } from "@/data/feature-items";
import { FC } from "react";
import FeatureCard from "./feature-card";

interface Props {}

const Features: FC<Props> = (props): JSX.Element => {
  return (
    <section className="even-section">
      <div className="container">
        <h2 className="section-title">
          <p>
            Reasons To Choose{" "}
            <span className="text-gradient font-bold">E-Learning</span>
          </p>
          <p>As Your Study Destination</p>
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {featuresItemsData.map((feature, index) => (
            <FeatureCard content={feature} key={index} order={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
