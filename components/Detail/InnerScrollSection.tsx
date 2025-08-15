import DivContainer from "../Layout/DivContainer"
import BigTitle from "../shared/common/BigTitle"
import Cards from "./Cards"
import Inner from "./Inner"
const InnerScrollSection = () => {
     const cardsData1 = [
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.', hexText: 'درباره شرکت' },
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.',hexText: 'درباره شرکت' },
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.', hexText: 'درباره شرکت' },
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.', hexText: 'درباره شرکت'},
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.',hexText: 'درباره شرکت'},
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.', hexText: 'درباره شرکت' },
  ];

 const cardsData2 = [
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.', hexText: 'درباره شرکت' },
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.',hexText: 'درباره شرکت'},
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.',hexText: 'درباره شرکت' },
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.',hexText: 'درباره شرکت'},
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.', hexText: 'درباره شرکت' },
    { image: '/images/img.png', description: 'دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد.', hexText: 'درباره شرکت' },
  ];

    return (
        <>
            <DivContainer as={'section'} className="DetailSec py-[3em] 
              !w-full mx-auto flex bg-graylight  rounded-[40px]">
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