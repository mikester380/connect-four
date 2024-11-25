export default function PlayerVsCpu({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="82"
      height="46"
      viewBox="0 0 82 46"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
      >
        <g>
          <circle
            cx="59"
            cy="23"
            r="23"
            fill="#FFF"
          ></circle>
          <g transform="translate(39 3)">
            <circle
              cx="20"
              cy="20"
              r="20"
              fill="#FD6687"
            ></circle>
            <g
              stroke="#FFF"
              strokeWidth="3"
              transform="translate(10 12.5)"
            >
              <g>
                <path d="M12.083 0.417L17.083 0.417"></path>
                <path d="M2.917 0.417L7.917 0.417"></path>
                <path d="M0 6.25L20 6.25"></path>
              </g>
            </g>
          </g>
          <circle
            cx="23"
            cy="23"
            r="23"
            fill="#FFF"
          ></circle>
          <g transform="translate(3 3)">
            <circle
              cx="20"
              cy="20"
              r="20"
              fill="#FD6687"
            ></circle>
            <g
              stroke="#FFF"
              strokeWidth="3"
              transform="translate(10 11.667)"
            >
              <path
                d="M5 22.292c5.523 0 10-4.477 10-10s-4.477-10-10-10"
                transform="rotate(90 10 12.292)"
              ></path>
              <g transform="translate(5.625)">
                <path d="M0.417 0L0.417 4.987"></path>
                <path d="M8.75 0L8.75 4.987"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
