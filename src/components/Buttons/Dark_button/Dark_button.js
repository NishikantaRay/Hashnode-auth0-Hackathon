import React from "react";

/**
 * A dark button component with two text fields.
 * @param {Object} props - The props object.
 * @param {string} props.text_1 - The first text field.
 * @param {string} props.text_2 - The second text field.
 * @returns {JSX.Element} - A JSX element representing the dark button.
 */
export default function Dark_button({ text_1, text_2 }) {
  return (
    <button type="submit" className="btn btn_dark">
      <span>
        <small>{text_1}</small>
        <small>{text_2}</small>
      </span>
    </button>
  );
}
