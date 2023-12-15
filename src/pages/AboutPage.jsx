// This is a static page mocking an "About Us" section for our fake user data
import Header from '../components/Header';
import HomePage from './HomePage';

export default function AboutPage() {
    return (
      <div className="container pt-4">
        <p>
        <HomePage />
         I'm Cristofher Alvarado, also known as kingwizard. I find joy in gaming, outdoor activities, and expressing creativity through drawing, painting, and photography. While currently my job is serving, I used to be a body shop technician. I ventured into HTML through YouTube, and now I'm immersed in a web development boot camp at Uconn. My skills include JavaScript,Figma, Photoshop, React, Node.js, MySQL, MongoDB, and GraphSQL. Eagerly pursuing a career as a developer or designer.
        </p>
        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Fully Responsive</h3>
                  <p className="lead mb-0">
                    This theme will look great on any device, no matter the size!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Bootstrap 5 Ready</h3>
                  <p className="lead mb-0">
                    Featuring the latest build of the new Bootstrap 5 framework!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3>Easy to Use</h3>
                  <p className="lead mb-0">
                    Ready to use with your own content, or customize the source
                    files!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
          impedit suscipit sed magnam alias in, repellat expedita hic explicabo
          architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Velit voluptate exercitationem quaerat pariatur
          mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
          nostrum temporibus ad omnis nam rerum eligendi.
        </p>
      </div>
    );
  }
  