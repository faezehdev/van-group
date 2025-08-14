import DivContainer from "../../Layout/DivContainer"
import Image from 'next/image'
import BigTitle from "../../shared/common/BigTitle"
import { FC } from "react"
import Category from "../../category/Category"

interface CategorySectionPropType {
  [key: number]: string; 
}

const CategorySection: FC<CategorySectionPropType> = (props) => {
  const categories = Object.values(props); 
  return (
    <DivContainer as={'section'} className="relative">
      <span className="overlay absolute left-0 top-0 z-0">
        <Image width={350} height={497} alt='' src='/images/pattern.png' />
      </span>
      <BigTitle
        signture="ONE GROUP"
        category="دسته‌بندی شرکت ها"
      >
        <h2>جمله کوتاه یا یک تایتل</h2>
      </BigTitle>
      <div className="Categories_container mt-[2em] grid lg:grid-cols-5 md:grid-cols-2 md:gap-6 grid-cols-1 gap-4 lg:gap-6">
        {categories.map((cat, index) => (
          <Category key={index} category={cat} />
        ))}
      </div>
    </DivContainer>
  )
}

export default CategorySection
