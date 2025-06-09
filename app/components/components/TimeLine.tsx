import { JSX, SVGProps } from "react";

export const TimeLine = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 86 10" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 5 q 18 -14 7 0 t 7 0 7 0 7 0 7 0 7 0 7 0 7 0 7 0 7 0 7 0 7 0"
        stroke="currentColor"
        fill="none"
        strokeWidth={1}
        strokeLinecap="round"
      />
    </svg>
  )
};