import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import '../App.css'
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';

function HomePage(){
    return(
        <>

         <br/>
          <h1 className="text-7xl font-bold underline">
      Hello, World!
         </h1>
            <Header />
            <AboutPage />
            
            <div className='container pt-4'>
            <section className="features-icons transparent-shadow text-center m-4">
      <div className="container">
        <div className="row p-2">
          <div className="col-lg-12">
            <h2 className="text-center">Projects</h2>
            <hr />
            <ProjectPage />
          </div>
        </div>
      </div>
    </section>
    </div>
    

           

            {/* <Footer /> */}
        </>
    )
}
 
export default HomePage;

