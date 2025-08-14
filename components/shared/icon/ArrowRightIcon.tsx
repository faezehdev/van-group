
import React from "react";
import { IconProps } from "@/interface/Elements";

export default function ArrowRightIcon({ iconClass, width, height,fill }: IconProps) {
  return (
<svg className={iconClass}
      fill={fill}
      width={width}
      height={height} viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
<path d="M-1.15096e-07 9.34823L16 0L8.22921 9.4647L15.7554 19L-1.15096e-07 9.34823Z" fill={fill}/>
</svg>

  );
}
