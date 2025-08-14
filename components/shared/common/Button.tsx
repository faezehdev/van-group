
import { ReactNode } from "react";

export interface ButtonProps {
  type:'submit' | 'button'
  name?:string
  title?:string
  children?:ReactNode,
  customStyle?:React.CSSProperties,
  className?:string
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button:React.FC<ButtonProps> = ({type , name , title , customStyle , children , className, onClick })=>{
    return (
        <>
          <button  className={` hover:cursor-pointer w-max flex justify-center font-bold text-sm leading-[28px] text-white
          items-center gap-3 bg-black rounded-[12px] py-2 px-[4em] ${className ? className : ''}`}
           type={type}
           name={name}
           title={title}
           style={customStyle}
           onClick={onClick}
           >
            {
                children ? children : title
            }
          </button>
        </>
    )
}
export default Button