import { useEffect, useState } from 'react';

export const NavbarMenuItem = ({ text }) => {

    const [ isMenuItemSelected, setisMenuItemSelec ] = useState( false );

    const toogleSelected = () => {
        setisMenuItemSelec( true );
    }

    useEffect(() => {
        const timmer = setTimeout(() => {
            setisMenuItemSelec( false );
        }, 700);
    
    }, [ isMenuItemSelected ])
    

    return (
        <a  className={`max-md:hidden
                        group
                        flex-none 
                        transition 
                        ease-in-out 
                        ${ isMenuItemSelected && 'text-teal-400 duration-300'}
                        text-lg
                        font-bold
                        font-julius-sans-one
                        duration-200
                        hover:text-teal-400
                        hover:duration-200`}
            onClick={ toogleSelected } 
            href='#' 
            target='_self'
        > 
            { text }
            <div className='
                    h-1 
                    scale-50
                    bg-cyan-400
                    transition 
                    ease-out 
                    duration-300 
                    group-hover:scale-100
                    group-hover:ease-in 
                    group-hover:duration-300 '></div>
        </a>
    )
}
