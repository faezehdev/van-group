



import React from "react";
import { IconProps } from "@/interface/Elements";

export default function TwitterIcon({ iconClass, width, height,fill }: IconProps) {
    return (
   
<svg className={iconClass}
            fill="none"
            width={width}
            height={height} viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
<path d="M15.9023 0.5L10.5137 7.31348L10.2852 7.60254L10.4932 7.90625L17.0518 17.5H12.707L8.50391 11.4238L8.11914 10.8682L7.7002 11.3984L2.87402 17.5H1.38672L7.19531 10.1523L7.4248 9.8623L7.21387 9.55859L0.953125 0.500977H5.43164L9.21191 6.0332L9.5957 6.59473L10.0166 6.06152L14.417 0.5H15.9023ZM2.80859 2.0166L12.793 16.457L12.9424 16.6729H15.6816L15.1475 15.8906L5.27246 1.4502L5.12402 1.23242H2.26562L2.80859 2.0166Z" fill={fill} stroke={fill}/>
</svg>

   

      
    );
}
