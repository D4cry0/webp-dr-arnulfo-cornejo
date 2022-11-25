
import { useState } from 'react';

import { Navbar, SnapCardContainerFullScreen, SnapHero } from './components';

import './assets/styles.css';


export const App = () => {

    const [ directionScroll, setDirectionScroll ] = useState( 0 );
    const [ isScrollDown, setIsScrollDown ] = useState( false );

    const [ inCardContainer1, setInCardContainer1 ] = useState( true );
    const [ inCardContainer2, setInCardContainer2 ] = useState( false );
    const [ inCardContainer3, setInCardContainer3 ] = useState( false );
    
    const handleS = event => {

        const scrollTop = event.currentTarget.scrollTop;

        let direction = directionScroll < scrollTop;
        let snapCardH = event.currentTarget.scrollHeight / 2 / 3;

        // console.log(scrollTop);
        // console.log(snapCardH);

        // console.log(event.currentTarget.scrollHeight,' - ',scrollTop);
        // setScreenPos( direction ? screenPos+screenH : screenPos-screenH);
        setInCardContainer1( scrollTop >-1 && scrollTop <= snapCardH );
        setInCardContainer2( scrollTop > snapCardH && scrollTop <= snapCardH*2 );
        setInCardContainer3( scrollTop > snapCardH*2 && scrollTop <= snapCardH*3 );
        
        setIsScrollDown( direction );

        setDirectionScroll( scrollTop );
    }

    return (
        <div>
            <Navbar isScrollDown={ isScrollDown } inCardContainer={ inCardContainer1 }/>

            <div onScroll={ handleS } className='snap-y snap-mandatory h-screen w-full overflow-y-scroll scroll-smooth' >
                <SnapCardContainerFullScreen bgColor={ 'bg-slate-200' }>
                    <SnapHero isScrollDown={ isScrollDown } inCardContainer={ inCardContainer1 }/>
                </SnapCardContainerFullScreen>
                <SnapCardContainerFullScreen bgColor={ 'bg-red-700' }>
                    <div className='text-8xl bg-red-600'> TEST1 </div>
                </SnapCardContainerFullScreen>
                <SnapCardContainerFullScreen bgColor={ 'bg-orange-700' }>
                    <div className='text-8xl bg-blue-600'> TEST2 </div>
                </SnapCardContainerFullScreen>
                <SnapCardContainerFullScreen bgColor={ 'bg-black' }>
                    <div className='text-8xl bg-cyan-600'> TEST3 </div>
                </SnapCardContainerFullScreen>
            </div>
        </div>
    )
}
