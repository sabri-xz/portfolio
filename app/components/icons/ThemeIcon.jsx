export const ThemeIcon = (props) => (
    props.theme == 'dark' ? ( // if current theme is dark, display the sun
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                clipPath="url(#a)"
                stroke="currentcolor"
                strokeWidth={2}
                strokeMiterlimit={10}
            >
                <path
                    d="M12 18a6 6 0 100-12 6 6 0 000 12z"
                    fill="currentcolor"
                />
                <path
                    d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556l-1.414-1.414"
                    strokeLinecap="round"
                />
            </g>
            <defs>
                <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    ) : ( // if current theme is light, display the moon
        <svg
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.399 10.399 0 000 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256z"
                stroke="currentcolor"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ) 
);