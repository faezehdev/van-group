
import React from "react";
import { IconProps } from "@/interface/Elements";

export default function ArrowD({ iconClass, width, height ,fill}: IconProps) {
  return (




<svg  className={iconClass}
      fill="none"
      width={width}
      height={height} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.94189 12.0252L10.0002 17.0835L15.0586 12.0252" stroke={fill} stroke-width="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 2.91689L10 16.9419" stroke={fill} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 
  );
}
