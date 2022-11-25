import { useEffect, useState } from 'react';
import { assets } from '../constants'

export const SnapHero = ({ isScrollDown, inCardContainer }) => {

    // const mostrar = isScrollDown && inCardContainer;
    const [ display, setDisplay ] = useState('');

    useEffect(() => {
        !isScrollDown && inCardContainer 
                            ? setDisplay( 'visible' )
                            : setTimeout(() => {
                                setDisplay( 'invisible' );
                              }, 50);

    }, [ inCardContainer ]);
    

    const translateX = !isScrollDown && inCardContainer 
        ? 'transition-transform translate-x-8 duration-1000' 
        : 'transition-transform -translate-x-8 duration-1000';

    const translateXM = !isScrollDown && inCardContainer 
        ? 'transition-transform translate-x-4 duration-1000' 
        : 'transition-transform -translate-x-4 duration-1000';

    return (
        // TODO: cambiar las imagenes para movil y para PC por sm xs etc

        <div>
            <div className={` 

                        group
                        
                        font-archivo 
                        text-sky-50
                        ease-in-out
                        ${ !isScrollDown && inCardContainer ? ' opacity-100 transition-all duration-1000 ' : ' opacity-0 transition-all duration-1000 ' }
                        ${ display }

                        `}>
                <p className={` fixed 
                                top-[16rem] 
                                left-[2.5rem] 
                                text-8xl 
                                ease-in-out 
                                ${ translateXM }

                                `}>
                    MANTENER <br /> <span className='text-lime-300'>SANOS</span> <br /> TUS 
                </p>
                <p className={` fixed 
                                top-[28rem] 
                                left-[15rem] 
                                text-8xl 
                                first-letter:text-sky-300 
                                ease-in-out 
                                ${ translateX }
                                
                                hover:translate-y-3 duration-1000
                                `}>
                    OÍDOS
                </p>
                <p className={` fixed 
                                top-[35rem] 
                                left-[12rem] 
                                text-8xl 
                                first-letter:text-sky-300 
                                ease-in-out 
                                ${ translateX }

                                hover:translate-y-3 duration-1000
                                `}>
                    NARIZ
                </p>
                <p className={` fixed 
                                top-[42rem] 
                                left-[9rem] 
                                text-8xl 
                                first-letter:text-sky-300 
                                ease-in-out 
                                ${ translateX }

                                hover:translate-y-4 duration-1000
                                `}>
                    LARINGE
                </p>
                <p className={` fixed 
                                top-[49rem] 
                                left-[6rem] t
                                text-8xl 
                                first-letter:text-sky-300 
                                ease-in-out 
                                ${ translateX }
                                
                                hover:translate-y-5 duration-1000
                                `}>
                    GARGANTA
                </p>
                <p className={` fixed 
                                top-[16rem] 
                                left-[62rem] 
                                text-8xl 
                                ease-in-out 
                                ${ translateXM }

                                `}>
                    ES <br /> NUESTRA <br /> <span className='text-lime-300'>PRIORIDAD</span>
                </p>
            </div>

            <div className='flex justify-center'>
                <img className={`
                            h-full
                            `} 
                        src={ assets.cirugiaOido4.ulr }
                        alt={ assets.cirugiaOido4.alt } />
            </div>
        </div>

    )
}
