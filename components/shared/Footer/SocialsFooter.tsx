import SocialFooter from "./SocialFooter"
import PhoneIcon from "../icon/PhoneIcon"
import LocationIcon from "../icon/LocationIcon"
import MessageIcon from "../icon/MessageIcon"
const SocialsFooter = () => {
    return (
        <>
            <div className="Socilas w-full grid lg:grid-cols-3 grid-cols-1 gap-3.5 lg:gap-0 justify-center items-center">
                <SocialFooter
                    as="link"
                    link="tel:021-42101000"
                    icon={<PhoneIcon width={40} height={40} fill="black" /> }
                    title="021-42101000"
                />
                <SocialFooter
                    icon={<LocationIcon width={40} height={40} fill="black" /> }
                    title="تهران، جهان کودک، برج دات وان"
                />
                <SocialFooter
                    as="link"
                    link="mailto:nfo1@one-holding.ir"
                    icon={<MessageIcon width={40} height={40} fill="black" /> }
                    title="info1@one-holding.ir"
                />
            </div>
        </>
    )
}
export default SocialsFooter