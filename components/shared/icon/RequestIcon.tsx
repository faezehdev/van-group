
import React from "react";
import { IconProps } from "@/interface/Elements";

export default function RequestIcon({ iconClass, width, height,fill }: IconProps) {
    return (

<svg className={iconClass}
            fill="none"
            width={width}
            height={height} viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V11.625C16.5 14.25 15 15.375 12.75 15.375H5.25" stroke={fill} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.75 6.75L10.4025 8.625C9.63 9.24 8.3625 9.24 7.59 8.625L5.25 6.75" stroke={fill} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 12.375H6" stroke={fill} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 9.375H3.75" stroke={fill} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      
    );
}
