

import React from "react";
import { IconProps } from "@/interface/Elements";

export default function CalenderIcon({ iconClass, width, height,fill }: IconProps) {
  return (
    
<svg className={iconClass}
      width={width}
      height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.6665 1.1665V2.9165" stroke={fill} strokeWidth="0.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.3335 1.1665V2.9165" stroke={fill} strokeWidth="0.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.0415 5.30273H11.9582" stroke={fill} strokeWidth="0.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.2058 9.199L9.14078 11.264C9.05912 11.3457 8.98327 11.4973 8.96577 11.6082L8.85494 12.3957C8.8141 12.6815 9.01244 12.8798 9.29828 12.839L10.0858 12.7282C10.1966 12.7107 10.3541 12.6348 10.4299 12.5532L12.4949 10.4882C12.8508 10.1323 13.0199 9.71818 12.4949 9.19318C11.9758 8.67401 11.5616 8.84317 11.2058 9.199Z" stroke={fill} strokeWidth="0.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.9082 9.49658C11.0832 10.1266 11.5732 10.6166 12.2032 10.7916" stroke="black" strokeWidth="0.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12.8332H4.66667C2.625 12.8332 1.75 11.6665 1.75 9.9165V4.95817C1.75 3.20817 2.625 2.0415 4.66667 2.0415H9.33333C11.375 2.0415 12.25 3.20817 12.25 4.95817V6.99984" stroke={fill} strokeWidth="0.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.99745 7.99186H7.00269" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.83827 7.99186H4.84351" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.83827 9.74186H4.84351" stroke={fill}  strokeLinecap="round" strokeLinejoin="round"/>
</svg>


  );
}
