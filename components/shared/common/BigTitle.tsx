import { FC } from "react"

interface BigTitlePropType {
    children?: React.ReactNode
    signture?: string
    category?: string
    className?:string
}
const BigTitle: FC<BigTitlePropType> = ({
    children,
    signture = "ONE GROUP",
    category = "دسته‌بندی شرکت ها",
    className
}) => {
    return (
        <div dir="rtl" className={`${className} Big_title w-auto justify-center items-start flex flex-col`}>
            <span className="signture w-auto flex font-bold text-xs text-black">
                {signture}
            </span>

            <div className="content w-auto justify-start items-center flex gap-2.5">
                <span
                    className="line bg-light1 w-[140px] h-[1px] relative 
                    before:content-[''] before:absolute before:top-[-.1em] before:rotate-45 before:left-[-3%] 
                    before:w-[5px] before:h-[5px] before:bg-light1">
                </span>

                <span className="category w-auto flex justify-center text-base  text-light1 font-normal">
                    {category}
                </span>
            </div>

            <div className="title w-auto mt-[.5em] flex justify-center text-[28px] text-black font-normal">
                {children ? children : <p>جمله کوتاه یا یک تایتل</p>}
            </div>
        </div>
    )
}
export default BigTitle
