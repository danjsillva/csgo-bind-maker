import React from "react";
import { FiHeart } from "react-icons/fi";

export default function DevelopedBy() {
  return (
    <small className="text-muted">
      Developed with <FiHeart /> by{" "}
      <a
        href="https://www.instagram.com/danjsillva/"
        target="blank"
        className="text-dark"
        style={{ textDecoration: "none" }}
      >
        Daniel Silva
      </a>
    </small>
  );
}
