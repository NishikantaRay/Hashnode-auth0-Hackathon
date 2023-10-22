import React from "react";

/**
 * Renders a single analytics data item.
 * @param {Object} item - The data item to be rendered.
 * @param {string} item.title - The title of the data item.
 * @param {string} item.value1 - The first value of the data item.
 * @param {string} item.value2 - The second value of the data item.
 * @returns {JSX.Element} - The rendered analytics data item.
 */
export default function AnalyticsData({ item }) {
  return (
    <div className="col col-lg-3 col-md-6" key={item}>
      <div className="counter_item">
        <h3 className="counter_value">
          <span className="counter_value_text">
            {item?.value1}
            <span>{item?.value2}</span>
          </span>
        </h3>
        <p className="mb-0">{item?.title}</p>
      </div>
    </div>
  );
}
