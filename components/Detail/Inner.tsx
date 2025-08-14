import { FC } from "react"
import BigTitle from "../shared/common/BigTitle"
import Cards from "./Cards"
import ArrowRightIcon from "../shared/icon/ArrowRightIcon"
interface InnerPropType {
    category: string
    title: string
    children: React.ReactNode
}
const Inner: FC<InnerPropType> = ({ category, title, children }) => {
    return (
        <div className="inner w-full flex my-5 flex-col gap-3">
            <div className="tit w-full flex items-end justify-between">
                <ArrowRightIcon iconClass="ml-[5%]" fill="black" width={30} height={30} />
                <BigTitle
                    signture="ONE GROUP"
                    category={category}
                    className="w-auto ml-auto mr-[5%] justify-start">
                    <h3>  {title}</h3>

                </BigTitle>

            </div>

            {
                children
            }
        </div>
    )
}
export default Inner