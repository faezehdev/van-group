import DivContainer from "../Layout/DivContainer"
import BigTitle from "../shared/common/BigTitle"
import Cards from "./Cards"
import Inner from "./Inner"
const InnerScrollSection = () => {
     const cardsData1 = [
    { image: '/images/img.png', description: 'توضیح کارت اول...', hexText: 'درباره شرکت' },
    { image: '/images/img.png', description: 'توضیح کارت دوم...', hexText: 'اطلاعات بیشتر' },
    { image: '/images/img.png', description: 'توضیح کارت سوم...', hexText: 'مشاهده جزئیات' },
    { image: '/images/img.png', description: 'توضیح کارت اول...', hexText: 'درباره شرکت' },
    { image: '/images/img.png', description: 'توضیح کارت دوم...', hexText: 'اطلاعات بیشتر' },
    { image: '/images/img.png', description: 'توضیح کارت سوم...', hexText: 'مشاهده جزئیات' },
  ];

  const cardsData2 = [
    { image: '/images/img.png', description: 'توضیح کارت چهارم...', hexText: 'درباره شرکت' },
    { image: '/images/img.png', description: 'توضیح کارت پنجم...', hexText: 'اطلاعات بیشتر' },
    { image: '/images/img.png', description: 'توضیح کارت ششم...', hexText: 'مشاهده جزئیات' },
    { image: '/images/img.png', description: 'توضیح کارت چهارم...', hexText: 'درباره شرکت' },
    { image: '/images/img.png', description: 'توضیح کارت پنجم...', hexText: 'اطلاعات بیشتر' },
    { image: '/images/img.png', description: 'توضیح کارت ششم...', hexText: 'مشاهده جزئیات' },
  ];

    return (
        <>
            <DivContainer as={'section'} className="DetailSec py-[3em] 
             lg:!w-auto lg:!max-w-[70%] w-full mx-auto flex bg-graylight  rounded-[40px]">
                <div className="innerSec lg:h-[976px] lg:overflow-y-auto gap-4 w-full flex flex-col">
                    <Inner category="معرفی شرکت ها" title="ترابری">
                        <Cards cardsData={cardsData1} />
                    </Inner>
                    <Inner category="معرفی شرکت ها" title="ترابری">
                        <Cards cardsData={cardsData2} />
                    </Inner>
                </div>

            </DivContainer>
        </>
    )
}
export default InnerScrollSection