import { FC } from "react"
import ArrowRightIcon from "../shared/icon/ArrowRightIcon"

interface CategoryPropType {
    children?: React.ReactNode
    category: string
}
const Category: FC<CategoryPropType> = ({ category }) => {
    return (
        <>
            <div className="category relative hover:cursor-pointer hover:bg-transparent duration-100
                       overflow-hidden group/cat w-full flex justify-center items-center py-3 bg-black1 rounded-2xl">
                <div className="category-overlay duration-500 scale-[0] items-center rounded-2xl
                         w-full h-full absolute top-0 group-hover/cat:scale-[1] z-[1] bg-graylight flex justify-between ">
                    <p className="text-2xl  text-black font-normal mr-5">
                        {category}
                    </p>
                    <span className="icon ml-5 w-[40px] h-[40px]  flex justify-center items-center bg-black rounded-[12px]">
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