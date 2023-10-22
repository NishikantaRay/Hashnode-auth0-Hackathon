import React from "react";
import { Link } from "react-router-dom";
/**
 * A button component that renders an anchor tag with optional classes, href, and text.
 *
 * @param {Object} props - The props object that contains the component's properties.
 * @param {string} [props.clas] - The optional class name for the anchor tag.
 * @param {string} [props.href] - The optional URL for the anchor tag.
 * @param {string} [props.text1] - The optional text to display before the second text.
 * @param {string} [props.text2] - The optional text to display after the first text.
 * @returns {JSX.Element} - The JSX element that represents the button component.
 */
export default function Anch_button({
  clas = "",
  href = "",
  text1 = "",
  text2 = "",
}) {
  return (
    <Link className={clas} to={href}>
      <span>
        <small>{text1}</small> <small>{text2}</small>
      </span>
    </Link>
  );
}
