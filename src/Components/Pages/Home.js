import React from 'react';
import '../../App.css'
import Card from '../Card';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home() {
    return (
        <>
            <HeroSection/>
            <Card></Card>
            <Footer></Footer>
        </>
    );
}

export default Home;