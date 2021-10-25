import React from "react";
import { FaHeart } from "react-icons/fa";

export default function DevelopedBy() {
  return (
    <small className="text-light">
      Developed with <FaHeart /> by{" "}
      <a
        href="https://www.instagram.com/danjsillva/"
        target="blank"
        className="text-light"
        style={{ textDecoration: "none" }}
      >
        Daniel Silva
      </a>
    </small>
  );
}
