




import React from "react";
import { IconProps } from "@/interface/Elements";

export default function LocationIcon({ iconClass, width, height, fill }: IconProps) {
    return (

        <svg className={iconClass}
            fill="none"
            width={width}
            height={height} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9998 22.3834C22.8717 22.3834 25.1998 20.0553 25.1998 17.1834C25.1998 14.3115 22.8717 11.9834 19.9998 11.9834C17.1279 11.9834 14.7998 14.3115 14.7998 17.1834C14.7998 20.0553 17.1279 22.3834 19.9998 22.3834Z" stroke={fill} strokeWidth="1.5" />
            <path d="M6.0335 14.1497C9.31683 -0.283655 30.7002 -0.266988 33.9668 14.1663C35.8835 22.633 30.6168 29.7997 26.0002 34.233C22.6502 37.4663 17.3502 37.4663 13.9835 34.233C9.3835 29.7997 4.11683 22.6163 6.0335 14.1497Z" stroke={fill} strokeWidth="1.5" />
        </svg>


    );
}
