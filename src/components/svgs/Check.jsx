export default function Check(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="75"
      viewBox="0 0 70 75"
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
            cx="35"
            cy="35"
            r="35"
            fill="#000"
            data-class="shadow"
          ></circle>
          <circle
            cx="35"
            cy="40"
            r="35"
            fill="#000"
            data-class="shadow"
          ></circle>
          <circle
            cx="35"
            cy="35"
            r="32"
            fill="#FD6687"
          ></circle>
          <path
            stroke="#FFF"
            strokeWidth="3"
            d="M20 34.5819497L30.2640104 44.84596 50.1099704 25"
          ></path>
        </g>
      </g>
    </svg>
  )
}
