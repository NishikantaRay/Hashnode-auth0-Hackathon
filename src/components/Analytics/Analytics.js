import React from "react";
import "./analytics.css";
import AnalyticsData from "../Cards/AnalyticsCards/AnalyticsData";
/**
 * Renders a section with analytics data.
 * @returns {JSX.Element} JSX element containing the section with analytics data.
 */
export default function Analytics() {
  const analyticsData = [
    {
      id: 1,
      title: "users trust StudyTub for their educational journey",
      value1: "1400",
      value2: "+",
    },
    {
      id: 2,
      title: "students have joyfully downloaded our notes!",
      value1: "1500",
      value2: "+",
    },
    {
      id: 3,
      title: "The Ratio of Theory and Practice in Each Course",
      value1: "25",
      value2: "/75",
    },
    {
      id: 4,
      title: "impressive rating from our valued community!",
      // value1: "⭐⭐⭐⭐",
      value2: "4.8",
    },
  ];
  return (
    <section className="counter_section bg_light section_space_md">
      <div className="container">
        <div className="row">
          {analyticsData?.map((item) => {
            return <AnalyticsData item={item} key={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
