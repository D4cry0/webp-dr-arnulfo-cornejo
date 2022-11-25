
import { assets } from "../constants"
import { NavbarHamMenu, NavbarMenuItem } from "./";

export const Navbar = ({ isScrollDown, inCardContainer }) => {


    return (
        <div className={`fixed 
                        flex 
                        items-center 

                        bg-transparent
                        bg-gradient-to-b
                        

                        ease-in
                    
                        ${ inCardContainer && 'from-slate-200' }
                        
                        
                        
                        ${ isScrollDown ? 'h-28 transition-all duration-100' : 'h-36 transition-all duration-100' }

                        w-full`}>
            <div className=' max-xs:w-52 max-ss:shrink-1 ss:shrink-0  min-w-[13rem] px-4 z-10'>
                <img src={ assets.logo.url } alt={ assets.logo.alt } width='400' />
            </div>
            <div className=' flex flex-1 justify-end gap-9 px-24 z-10'>
                
                <NavbarMenuItem text={'Inicio'} />
                <NavbarMenuItem text={'Consultorio'} />
                <NavbarMenuItem text={'Cirugias'} />
                <NavbarMenuItem text={'Metodos de pago'} />
                <NavbarMenuItem text={'Contacto'} />

                <NavbarHamMenu />
            </div>
            <div className={`
                        fixed
                        w-full
                        z-0
                        
                        place-self-start
                        opacity-95
                        bg-indigo-500
                        ease-in

                        ${ !inCardContainer 
                                    ? 'h-36 transition-all duration-100' 
                                    : 'h-0 transition-all duration-100'  }

                        
                `}
            ></div>
        </div>
    )
}
