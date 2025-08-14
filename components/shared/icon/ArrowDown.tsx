import React from "react";
import { IconProps } from "@/interface/Elements";

export default function ArrowDown({ iconClass, width, height ,fill}: IconProps) {
  return (

<svg   className={iconClass}
      fill="none"
      width={width}
      height={height} viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
<path d="M16.5999 7.4585L11.1666 12.8918C10.5249 13.5335 9.4749 13.5335 8.83324 12.8918L3.3999 7.4585" stroke={fill} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>

 
    </svg>
  );
}
