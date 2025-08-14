const AboutSection = ()=>{
    return(
        <>
          <div className="About_container my-8 mx-auto flex flex-col gap-5
      w-90 lg:grid lg:grid-cols-[auto_auto] lg:gap-[5em] justify-center items-center">
        <div className="title w-auto flex justify-center text-right">
          <h1 className="flex flex-col lg:text-right text-center font-normal text-[34px] text-black">
            <span>
              گروه
            </span>
            <span>
              ارزش‌آفرین ‌وان
            </span>

          </h1>
        </div>
        <div className="Text flex flex-col lg:text-center lg:justify-center text-justify lg:max-w-[912px]  font-normal text-sm text-black">
          <p>
            وان، یک گروه اقتصادی ارزش آفرین است (آوان) به واسطه سرمایه گذاری هوشمندانه و ساماندهی خردمندانه، زیرساخت های لازم برای آبادانی و سودرسانی همگانی را فراهم می آورد، تا کسانی که پویا و کوشا هستند، مجال زایش و رویش بیابند.گروه ارزش‌آفرین وان یک سازمان دوراندیش است که با شعار»آسایش برای همگان« نقشی محوری در زمینه‌های کلیدی مانند حمل و نقل، پولی-مالی، سرمایه‌گذاری، کارآفرینی، توسعه تجارت بین‌المللی، رسانه، فناوری و ارتباطات ایفا خواهد نمود.
          </p>
        </div>
      </div>
        </>
    )
}
export default AboutSection