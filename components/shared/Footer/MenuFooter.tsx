import { FC } from "react"
import FooterNav from "./FooterNav"
interface MenuFooterPropTitle{
 title:string,
 items:{
    label:string,
    href:string
 }[]
}
const MenuFooter:FC<MenuFooterPropTitle> = ({title,items})=>{
    return(
        <>
        <div className="Menus lg:w-[80%] w-full mr-auto gap-2 flex flex-col justify-start items-center">
             <div className="title w-full flex justify-start items-center text-sm font-semibold">
            <p className="text-right">
               {title}
            </p>
             </div>
          <FooterNav items={items}/>
        </div>
        </>
    )
}
export default MenuFooter