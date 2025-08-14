import DetailImage from "../../Detail/DetailImage"
import InnerScrollSection from "../../Detail/InnerScrollSection"
const DetailSection =()=>{
    return(
        <div className="w-[95%] gap-[4em] flex lg:flex-row flex-col mx-auto">
        <DetailImage/>
        <InnerScrollSection/>
        </div>
    )
}
export default DetailSection