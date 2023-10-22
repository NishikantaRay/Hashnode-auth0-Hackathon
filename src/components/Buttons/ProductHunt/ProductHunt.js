import React from "react";
import "./product_hunt.css";
/**
 * Renders a ProductHunt component with a link to StudyTub's Product Hunt page.
 * @returns {JSX.Element} ProductHunt component.
 */
export default function ProductHunt() {
  return (
    <div>
      <div className="product_hunt">
        <a
          href="https://www.producthunt.com/posts/studytub?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-studytub"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=350364&theme=dark"
            alt="StudyTub&#0032; - Your&#0032;One&#0032;Stop&#0032;for&#0032;all&#0032;the&#0032;Notes | Product Hunt"
            style={{ width: "250px", height: "54px" }}
            width="250"
            height="54"
          />
        </a>
      </div>
    </div>
  );
}
