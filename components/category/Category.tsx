import { FC } from "react"
import ArrowRightIcon from "../shared/icon/ArrowRightIcon"

interface CategoryPropType {
    children?: React.ReactNode
    category: string
}
const Category: FC<CategoryPropType> = ({ category }) => {
    return (
        <>
            <div className="category relative hover:cursor-pointer hover:bg-transparent duration-[1s]
                       overflow-hidden group/cat w-full flex justify-center items-center py-3 bg-black1 rounded-2xl">
                <div className="category-overlay releative duration-[1s] opacity-[0] items-center rounded-2xl
                         w-full h-full absolute top-0 group-hover/cat:opacity-[1] z-[1] bg-graylight flex justify-center ">
                    <p className="text-2xl mr-[34%] text-black font-normal ">
                        {category}
                    </p>
                    <span className="icon  left-0 ml-5 mr-auto translate-x-[100%] opacity-0 group-hover/cat:opacity-[1]
                    group-hover/cat:translate-x-[0%] duration-[1s]
                    w-[40px] h-[40px]  flex justify-center items-center bg-black rounded-[12px]">
                        <ArrowRightIcon width={19} height={16} fill="white" />
                    </span>
                </div>
                <p className="text-2xl  text-white font-normal">
                    {category}
                </p>

            </div>

        </>
    )
}
export default Category