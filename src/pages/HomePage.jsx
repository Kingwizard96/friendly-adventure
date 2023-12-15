import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css'
// import AboutPage from './AboutPage';

function HomePage(){
    return(
        <>
         <br/>
          <h1 className="text-7xl font-bold underline">
      Hello world!
         </h1>
            <Header />

            {/* <AboutPage /> */}
            
            <Footer />
        </>
    )
}
 
export default HomePage;

