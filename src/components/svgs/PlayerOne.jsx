export default function PlayerOne(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="59"
      viewBox="0 0 54 59"
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
            cx="27"
            cy="27"
            r="27"
            fill="#000"
          ></circle>
          <circle
            cx="27"
            cy="32"
            r="27"
            fill="#000"
          ></circle>
          <circle
            cx="27"
            cy="27"
            r="24"
            fill="#FD6687"
          ></circle>
          <g
            stroke="#000"
            strokeWidth="3"
            transform="translate(19 17)"
          >
            <path
              d="M6 26.75c6.627 0 12-5.373 12-12s-5.373-12-12-12"
              transform="rotate(90 12 14.75)"
            ></path>
            <g transform="translate(9.75)">
              <path d="M0.5 0L0.5 5.984"></path>
              <path d="M10.5 0L10.5 5.984"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
