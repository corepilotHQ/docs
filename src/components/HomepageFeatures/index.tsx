import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "The Problem",
    description: (
      <>
        CORE Satoshi Consensus Plus has 31 validators, but they're not created
        equal. Some validators offer 5.80% APR while others only provide 4.28% –
        that's a significant difference in rewards.
      </>
    ),
  },
  {
    title: "Earn More, Worry Less",
    description: (
      <>
        Our intelligent staking platform automatically finds the best validators
        and optimizes your rewards. With built-in insurance against validator
        downtime, your stake is always protected.
      </>
    ),
  },
  {
    title: "Optimized Rewards",
    description: (
      <>
        Corepilot delivers the best APY for your staked CORE through intelligent
        automation and real-time optimization.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
