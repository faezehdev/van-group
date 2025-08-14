
import React from "react";
import { IconProps } from "@/interface/Elements";

export default function PlayIcon({ iconClass, width, height }: IconProps) {
    return (

        <svg className={iconClass}
            fill="none"
            width={width}
            height={height} viewBox="0 0 86 86" xmlns="http://www.w3.org/2000/svg">
            <circle cx="43" cy="43" r="43" fill="white" />
            <path opacity="0.4" d="M42.9224 17.6665C56.9135 17.6665 68.2562 29.0084 68.2563 42.9995C68.2563 56.9907 56.9136 68.3335 42.9224 68.3335C28.9313 68.3333 17.5894 56.9906 17.5894 42.9995C17.5895 29.0086 28.9314 17.6667 42.9224 17.6665Z" fill="black" stroke="black" />
            <path d="M37.4653 34.5459C39.1697 33.5517 41.2249 33.5517 42.9292 34.5459L42.9312 34.5469L50.4233 38.8613C52.1536 39.8568 53.1649 41.6252 53.1177 43.6084V43.6201C53.1177 45.6101 52.1032 47.3572 50.397 48.3535L42.9058 52.668L42.9028 52.6689C42.0516 53.1654 41.1315 53.4023 40.1841 53.4023C39.2614 53.4023 38.3156 53.1649 37.4653 52.6689C35.759 51.6735 34.7427 49.9007 34.7427 47.9346V39.2803C34.7427 37.2895 35.758 35.542 37.4653 34.5459Z" fill="black" stroke="black" />
        </svg>

    );
}
