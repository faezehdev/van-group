"use client"
import DivContainer from "../../Layout/DivContainer"
import BigTitle from "../../shared/common/BigTitle"
import Form from "../../Form/Form"
import ContactIMG from "../../Contact/ContactIMG"
import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ContactSection = () => {
    const letfRef = useRef<HTMLDivElement>(null);
    const RightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (letfRef.current && RightRef.current) {
            gsap.fromTo(
                letfRef.current,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: letfRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
            gsap.fromTo(
                RightRef.current,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: RightRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

        }
    }, []);
    return (
        <>
            <DivContainer as={'section'} className="ContactSec  !my-[0]
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
            <div className="Sec w-90 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-7 justify-end lg:gap-0.5">
                <div ref={letfRef} className="w-full flex items-center">
                    <Form />
                </div>
                <div ref={RightRef} className="w-full flex items-center">
                    <ContactIMG />
                </div>


            </div>
        </>
    )
}
export default ContactSection