
import { useEffect, useState } from 'react';

import { Navbar, Hero } from './components';

import './assets/styles.css';


export const App = () => {

    const [ isScrollDown, setIsScrollDown ] = useState( false );

    const handleScroll = ( event ) => {
        
        window.scrollY <= 50 && setIsScrollDown( false );

        window.scrollY > 50 && scrollY < window.scrollY && setIsScrollDown( true );
        
        scrollY = window.scrollY;
    }
    
    
    let scrollY = 0;
    useEffect(() => {
        const handleScroll = event => {
            window.scrollY <= 40 && setIsScrollDown( false );
            window.scrollY > 40 && scrollY < window.scrollY && setIsScrollDown( true );
            scrollY = window.scrollY;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div>
            <Navbar isScrollDown={ isScrollDown } />
            
            <Hero />
        </div>
    )
}
