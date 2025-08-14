import { HTMLProps, ReactNode } from "react";

export interface IconProps {
  iconClass?: HTMLProps<HTMLElement>["className"]; 
  fill?: string;  
  stroke?: string;  
  width?: number | string;  
  height?: number | string; 
  children?: ReactNode;     
}