import React from "react";
import styled from "styled-components";
import ProfileCircle from "./ProfileCircle.g";
import Quote from "./Quote.g";

const SVG = styled.svg`
  max-width: 600px;
  width: 100vw;
  @media(min-width: 300px) {
    fill: orange;
  }
`;

function Fire() {
  const humans = [
    {
      name: "Bob",
    },
    {
      name: "Xavier",
    },
    {
      name: "Raquel",
    },
    {
      name: "Alex",
    },
    {
      name: "Jordan",
    },
    {
      name: "Billy",
    },
  ];

  return (
    <SVG xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 906 906">
      <defs>
        <radialGradient
          id="a"
          cx="468.97"
          cy="375.32"
          r="110.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#e56137"></stop>
          <stop offset="0.04" stopColor="#e56137" stopOpacity="0.94"></stop>
          <stop offset="0.24" stopColor="#e56137" stopOpacity="0.66"></stop>
          <stop offset="0.43" stopColor="#e56137" stopOpacity="0.42"></stop>
          <stop offset="0.61" stopColor="#e56137" stopOpacity="0.24"></stop>
          <stop offset="0.77" stopColor="#e56137" stopOpacity="0.11"></stop>
          <stop offset="0.9" stopColor="#e56137" stopOpacity="0.03"></stop>
          <stop offset="1" stopColor="#e56137" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
      <g transform="scale(0.5), translate(450 450)">
        <g style={{ isolation: "isolate" }}>
          <circle
            cx="469"
            cy="375.3"
            r="110.1"
            fill="url(#a)"
            transform-origin="469 375.3"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              values="1; 1.2; 2.4; 1.3; 2.7; 1.2; 1"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
          <path
            fill="#e56137"
            d="M427.3 328s-52.1 55.6-46.7 116.5c5.5 62.8 38.2 97.1 82.9 97 35.7 2.7 78.9-52.8 81.6-106.7s-5.8-87.3-35.6-105.9c0 0 8 20-7.1 36 0 0-.2-12.4-13.5-34.2s2.8-49.9 2.8-49.9-45.3 14.7-48.4 49.4a164.8 164.8 0 006.6 62.8s-22.4-4-22.6-65z"
          ></path>
          <path
            fill="#f5d33f"
            d="M454.8 517.2c31.7-1.3 45.8-19.2 36.8-49.1s-40.7-41.7-28.1-67.4c0 0-37.2 22.9-40.1 62.1-.4 33.3 11.4 55.2 31.4 54.4z"
          ></path>
          <path
            fill="#fff"
            d="M458.8 300.4c-7.9 7.5-14.4 17.4-15.5 29.8a164.8 164.8 0 006.6 62.8s-22.4-4-22.6-65c0 0-52.1 55.6-46.7 116.5s35.9 94.6 78.2 96.8z"
            style={{ mixBlendMode: "soft-light" }}
          ></path>
          <path
            fill="#382615"
            d="M562.1 539.9c13.5 7.2 15.1 19.4 9.8 33.4s-15.4 28.2-41.7 17.5-160.4-58.7-167.2-61.5-12.5-9.5-10.1-22.9 8.1-44.5 42-31.1 167.2 64.6 167.2 64.6z"
          ></path>
          <path
            fill="#7d5939"
            d="M540.8 472.9c14.9-3.5 24.2 4.6 29.5 18.6s6.9 31.4-19.8 40.7-159.3 61.6-166.3 63.9-15.7 1.2-22.7-10.4-23.3-38.8 11.1-51.1 168.2-61.7 168.2-61.7z"
          ></path>
        </g>
        {/* perhaps make this its own component? */}
        <g className="profiles" fill="gray">
          {/* center circle */}

          {humans.map((human, idx) => {
            const r = 350;
            const center = 453;
            const scale = Math.PI / 3;
            const rotation = Math.PI / 6;
            return (
              <g>
                <ProfileCircle
                  key={human.name}
                  person={human}
                  cx={Math.cos(idx * scale - rotation) * r + center}
                  cy={Math.sin(idx * scale - rotation) * r + center}
                />
                <Quote idx={idx} />
              </g>
            );
          })}
        </g>
      </g>
    </SVG>
  );
}

export default Fire;
