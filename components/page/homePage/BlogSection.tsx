
"use client"
import DivContainer from "../../Layout/DivContainer";
import Image from 'next/image'
import BigTitle from "../../shared/common/BigTitle";
import Blog from "../../Blog/Blog";
import ArrowRightIcon from "../../shared/icon/ArrowRightIcon";

const BlogSection = () => {
    const blogs = [
        {
            title: "عنوان بلاگ اول",
            description: "توضیح کوتاه درباره بلاگ اول...",
            date: "24 فروردین 1404",
            tags: ["گردشگری"],
            img: "/images/blog.png",
            imgHorizontal: "/images/hori.png"
        },
        {
            title: "عنوان بلاگ دوم",
            description: "توضیح کوتاه درباره بلاگ دوم...",
            date: "25 فروردین 1404",
            tags: ["فناوری"],
            img: "/images/blog.png",
            imgHorizontal: "/images/hori.png"
        },
        {
            title: "عنوان بلاگ سوم",
            description: "توضیح کوتاه درباره بلاگ سوم...",
            date: "26 فروردین 1404",
            tags: ["فناوری"],
            img: "/images/blog.png",
            imgHorizontal: "/images/hori.png"
        },
        {
            title: "عنوان بلاگ چهارم",
            description: "توضیح کوتاه درباره بلاگ چهارم...",
            date: "27 فروردین 1404",
            tags: ["فناوری"],
            img: "/images/blog.png",
            imgHorizontal: "/images/hori.png"
        },
    ];

    return (
        <DivContainer as={'section'} className="relative">

            <BigTitle signture="ONE GROUP" category=" وبلاگ">
                <h2>جمله کوتاه یا یک تایتل</h2>
            </BigTitle>

            <div className="lg:flex hidden flex-col lg:flex-row gap-4 mt-[2em] justify-center">
                {blogs.slice(0, 2).map((blog, idx) => (
                    <div key={idx} className="lg:w-[50%] w-full">
                        <Blog
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            tags={blog.tags}
                            img={blog.img}
                            imgHorizontal={blog.imgHorizontal}
                            variant="two"
                        />
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-8 w-full justify-center">

                {blogs.slice(2, 4).map((blog, idx) => (
                    <div key={idx} className="w-full">
                        <Blog
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            tags={blog.tags}
                            img={blog.img}
                            imgHorizontal={blog.imgHorizontal}
                            variant="three"
                        />
                    </div>
                ))}


                <div className="flex group/btn flex-col items-center justify-center bg-graylight hover:bg-black1 p-9 gap-8
                 rounded-3xl cursor-pointer duration-200">

                    <div className="det w-full flex justify-between items-center">
                        <h3 className="group-hover/btn:text-white text-lg flex flex-col font-semibold text-black">مشاهده اخبار
                            <p>  و مقالات بیشتر

                            </p>   </h3>

                        <span className="icon  w-[64px] h-[64px] 
                                           flex justify-center items-center bg-white rounded-[12px]">
                            <ArrowRightIcon fill="black" width={30} height={30} />
                        </span>


                    </div>
                    <Image
                        src="/images/moreblog.png"
                        alt="مشاهده اخبار بیشتر"
                        width={200}
                        height={150}
                        className="w-full"
                    />
                </div>
            </div>
        </DivContainer>
    )
}

export default BlogSection;
