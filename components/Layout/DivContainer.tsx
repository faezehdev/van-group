import { FC, ElementType, ReactNode } from "react";

interface DivContainerPropTypes {
  as?: ElementType; 
  children?: ReactNode;
  className?: string;
}

const DivContainer: FC<DivContainerPropTypes> = ({ 
  as: Tag = "div", 
  children, 
  className 
}) => {
  return (
    <Tag className={`w-90 flex flex-col my-[4em] mx-auto ${className} `}>
      {children}
    </Tag>
  );
};

export default DivContainer;
