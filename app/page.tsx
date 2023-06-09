"use client";
import styles from "./page.module.css";
import FeatureTitle from "./featureTitle";
import { useState } from "react";
import FeaturePreview from "./featurePreview";

export default function Home() {
  const [activeTitle, setActiveTitle] = useState(null);

  const features = [
    {
      title: "Use your calendar as a todo list",
      className: styles.previewOne,
    },
    {
      title: "Color your calendar to organize",
      className: styles.previewTwo,
    },
    {
      title: "Instantly know if someone is available",
      className: styles.previewThree,
    },
    {
      title: "Track what you listened to when",
      className: styles.previewFour,
    },
    {
      title: "Send scheduling links guests love",
      className: styles.previewFive,
    },
    {
      title: "Always know what your team is up to",
      className: styles.previewSix,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.fakeBox} />
      <div className={styles.features}>
        <div className={styles.leftSide}>
          {features.map((item, index) => (
            <FeatureTitle
              key={index}
              id={index}
              activeTitle={activeTitle}
              setActiveTitle={setActiveTitle}
            >
              {item.title}
            </FeatureTitle>
          ))}
        </div>
        <div className={styles.rightSide}>
          <div className={styles.previewBoxWrapper}>
            {features.map((item, index) => (
              <FeaturePreview
                key={index}
                id={index}
                className={item.className}
                activeTitle={activeTitle}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.fakeBox}></div>
    </div>
  );
}
