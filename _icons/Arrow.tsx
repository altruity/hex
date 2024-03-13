import React from 'react';

type ArrowTypes = {
  color?: string;
};

function Arrow({ color }: ArrowTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="11"
      fill="none"
      viewBox="0 0 22 11"
      role="img"
      aria-label="Arrow icon"
    >
      <path
        stroke="#695663"
        strokeLinecap="round"
        d="M1 5.5h20m0 0L16.5 1M21 5.5L16.5 10"
      ></path>
    </svg>
  );
}

export default Arrow;
