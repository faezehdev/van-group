import { FC, ReactNode } from "react"
import Link from "next/link"
interface SocialFooterPropType {
    icon: ReactNode
    title: string,
    as?: "link",
    link?: string
}
const SocialFooter: FC<SocialFooterPropType> = ({ icon, title, as, link }) => {
    return (
        <>
            <div className="socialFooter w-auto flex gap-4 justify-center items-center flex-col">
                <span className="Icon">
                    {icon}
                </span>
                {
                    as === "link" ? (
                        <Link href={`${link}`} className="Link-Title font-normal text-base text-black">
                            {title}
                        </Link>
                    ) :
                        (
                            <span className="Title font-normal text-base text-black">
                                {title}
                            </span>
                        )
                }

            </div>
        </>
    )
}
export default SocialFooter