import React from 'react';
import Header from '../components/Header';
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

            <div className="container pt-4">
        <section className="text-center m-4">
          <h2 className="text-center">My Name</h2>
          <p className="lead">
            Hi, I'm Cristofher Alvarado, also known as kingwizard. Welcome to my portfolio!
          </p>
        </section>
      </div>

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
    

           

           
        </>
    )
}
 
export default HomePage;

