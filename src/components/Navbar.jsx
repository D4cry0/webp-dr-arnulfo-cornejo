
import { assets } from "../constants"
import { NavbarHamMenu } from "./NavbarHamMenu";
import { NavbarMenuItem } from "./NavbarMenuItem";

export const Navbar = ({ isScrollDown }) => {


    return (
        <div className={`fixed 
                        flex 
                        items-center 

                        bg-gradient-to-b
                    
                        from-slate-200
                        
                        transition-colors
                        
                        ease-in-out
                        
                        ${ isScrollDown ? 'py-10 transition-all duration-300' : 'py-16 transition-all duration-300' }

                        w-full`}>
            <div className=' max-xs:w-52 max-ss:shrink-1 ss:shrink-0  min-w-[13rem] px-4'>
                <img src={ assets.logo.url } alt={ assets.logo.alt } width='400' />
            </div>
            <div className=' flex flex-1 justify-end gap-9 px-24'>
                
                <NavbarMenuItem text={'Inicio'} />
                <NavbarMenuItem text={'Consultorio'} />
                <NavbarMenuItem text={'Cirugias'} />
                <NavbarMenuItem text={'Metodos de pago'} />
                <NavbarMenuItem text={'Contacto'} />

                <NavbarHamMenu />
            </div>
        </div>
    )
}
