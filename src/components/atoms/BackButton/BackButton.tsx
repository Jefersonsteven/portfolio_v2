export default function BackButton () {
  function handleClick () {
    window.history.back()
  }

  return (
    <button className="btn-back" onClick={handleClick} title="Back">
      <svg
        width="27"
        height="40"
        viewBox="0 0 27 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.7059 5L7 20.4589L21.7059 35"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
  )
}
