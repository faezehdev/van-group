import DivContainer from "../../Layout/DivContainer"
import BigTitle from "../../shared/common/BigTitle"
import Form from "../../Form/Form"
import ContactIMG from "../../Contact/ContactIMG"
const ContactSection = ()=>{
    return(
        <>
          <DivContainer as={'section'} className="ContactSec lg:py-[3em] 
             w-full mx-auto flex flex-col ">
                  <BigTitle
                signture="ONE GROUP"
                category="تماس با ما"
                className="">
                <h3>  با ما در تماس باشید.</h3>
            </BigTitle>
            <div className="title w-full flex mt-4 flex-col justify-start lg:max-w-[616px]">
                <h4 className="flex flex-col">
                    <span>
                        گفت‌وگو، آغاز هر پیوند است. 
                    </span>
                     اگر پرسشی دارید، مایلید بیشتر درباره ما بدانید یا ایده‌ای در ذهن دارید، خوشحال می‌شویم از شما بشنویم.
                </h4>
            </div>
             </DivContainer>
             <div className="Sec w-90 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-7 lg:gap-0.5">
                <Form/>
                <ContactIMG/>
             </div>
        </>
    )
}
export default ContactSection