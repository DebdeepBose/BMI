import { useEffect } from "react";
import Vivus from "vivus";

const MySVGAnimation = () => {
  useEffect(() => {
    new Vivus("my-svg", { type: "delayed", duration: 200, animTimingFunction: Vivus.EASE });
  }, []);

  return (
    <svg
      id="my-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="1080"
      height="1080"
      viewBox="0 0 1000 1000"
    >
      <g transform="matrix(6.3 0 0 6.3 522.43 540)">
        <path
          style={{ stroke: "rgb(249,78,144)", strokeWidth: 13, fill: "none" }}
          transform="translate(-50, -50)"
          d="M 50 92.875 C 26.358 92.875 7.125 73.642 7.125 50 C 7.125 26.358000000000004 26.358 7.125 50 7.125 C 73.642 7.125 92.875 26.358 92.875 50 C 92.875 73.642 73.642 92.875 50 92.875 z M 50 9.125 C 27.461 9.125 9.125 27.461 9.125 50 C 9.125 72.538 27.461 90.875 50 90.875 C 72.538 90.875 90.875 72.538 90.875 50 C 90.875 27.461 72.538 9.125 50 9.125 z"
        />
      </g>
      <g transform="matrix(7.19 0 0 7.19 521.6 540)">
        <circle style={{ stroke: "rgb(0,0,0)", fill: "none" }} cx="0" cy="0" r="35" />
      </g>
      <g transform="translate(495, 565)">
        <text fontFamily="Alegreya" fontSize="80" fontWeight="700" style={{ fill: "rgb(0,0,0)" }}>
          <tspan>HI</tspan>
        </text>
      </g>
    </svg>
  );
};

export default MySVGAnimation;
