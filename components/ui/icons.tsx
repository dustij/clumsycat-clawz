import { FC } from "react"

type IconsProps = {
  name: "solscan" | "twitter" | "telegram"
}

const Icons: FC<IconsProps> = ({ name }) => {
  switch (name) {
    case "solscan":
      return (
        <svg
          width="1.25em"
          height="1.25em"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_107_536)">
            <path
              d="M4.15656 9.52251C4.15654 9.41082 4.17858 9.30022 4.22142 9.19707C4.26425 9.09393 4.32704 9.00026 4.40616 8.92146C4.48529 8.84266 4.5792 8.78028 4.6825 8.73789C4.7858 8.6955 4.89645 8.67395 5.0081 8.67447L6.41986 8.6791C6.64496 8.6791 6.86084 8.76856 7.02001 8.92779C7.17918 9.08701 7.2686 9.30297 7.2686 9.52816V14.8685C7.42764 14.8214 7.6316 14.7711 7.85504 14.7187C8.01018 14.6821 8.14844 14.5943 8.24741 14.4693C8.34637 14.3443 8.40024 14.1896 8.40029 14.0301V7.40589C8.40027 7.18068 8.48968 6.96469 8.64885 6.80543C8.80801 6.64616 9.0239 6.55667 9.24903 6.55663H10.6637C10.8888 6.55669 11.1047 6.64618 11.2638 6.80545C11.423 6.96471 11.5124 7.18069 11.5124 7.40589V13.5541C11.5124 13.5541 11.8664 13.4107 12.2115 13.265C12.3396 13.2107 12.449 13.12 12.5259 13.004C12.6028 12.888 12.6439 12.7519 12.644 12.6127V5.28288C12.644 5.17138 12.6659 5.06098 12.7086 4.95798C12.7512 4.85497 12.8137 4.76137 12.8925 4.68253C12.9713 4.60369 13.0649 4.54114 13.1678 4.49847C13.2708 4.4558 13.3812 4.43383 13.4926 4.43382H14.9072C15.1323 4.43382 15.3482 4.52327 15.5074 4.6825C15.6666 4.84172 15.756 5.05768 15.7561 5.28288V11.3186C16.9824 10.4295 18.2254 9.36008 19.2117 8.0742C19.3548 7.88755 19.4495 7.66836 19.4873 7.43619C19.5252 7.20403 19.505 6.9661 19.4285 6.74365C18.7611 4.79799 17.5093 3.10603 15.8442 1.89911C14.1791 0.692201 12.182 0.0292497 10.1259 0.000906595C4.58158 -0.0735996 -0.000496661 4.45391 4.79739e-05 10.0009C-0.00539586 11.7562 0.452555 13.4818 1.32759 15.0032C1.44827 15.2113 1.6258 15.3806 1.83934 15.4913C2.05287 15.6019 2.29354 15.6493 2.53307 15.6279C2.80069 15.6044 3.13388 15.5711 3.52996 15.5245C3.70236 15.5049 3.86152 15.4225 3.97713 15.2931C4.09274 15.1637 4.15673 14.9962 4.1569 14.8227V9.52251"
              fill="white"
            ></path>
            <path
              d="M4.1258 18.0876C5.61687 19.1727 7.37894 19.824 9.21708 19.9695C11.0552 20.115 12.8977 19.749 14.5408 18.9119C16.1839 18.0749 17.5635 16.7995 18.527 15.2267C19.4905 13.654 20.0003 11.8453 20 10.0008C20 9.77052 19.9893 9.54285 19.9739 9.31641C16.322 14.7648 9.57916 17.3122 4.12573 18.0878"
              fill="#BFCFDA"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_107_536">
              <rect width="20" height="20" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      )

    case "twitter":
      return (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1.25em"
          width="1.25em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
      )

    case "telegram":
      return (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 496 512"
          height="1.25em"
          width="1.25em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
        </svg>
      )
    default:
      return <div></div>
  }
}

export default Icons
