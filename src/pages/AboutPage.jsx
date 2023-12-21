import Resume from '../components/UI/Resume';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="container pt-4">
        <img
          src="/assets/me.jpeg"
          alt="AboutPage"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            borderRadius: '8px', // Adjust the value for the desired amount of curvature
            boxShadow: 'rgba(7, 24, 23, 31.1) 10px 15px 15px'
          }}
        />
        <br />
        <br />
        <h2 className="text-left">About Me</h2>
        <p>
          I find joy in gaming, outdoor activities, and expressing creativity through drawing, painting, and photography. While currently my job is serving, I used to be a body shop technician. I ventured into HTML through YouTube, and now I'm immersed in a web development boot camp at Uconn. My skills include JavaScript, Figma, Photoshop, React, Node.js, MySQL, MongoDB, and GraphSQL. Eagerly pursuing a career as a developer or designer.
        </p>
        <h2 className="text-left mt-4">Contact Information</h2>
        <p>
          Email: <a href="mailto:calvarado1996@gmail.com" style={{ color: 'blue' }}>calvarado1996@gmail.com</a> <br />
          Phone: <a href="tel:+13463975510" style={{ color: 'blue' }}>+1 (346) 397-5510</a>
        </p>
        <Resume />
      </div>
    </div>
  );
}