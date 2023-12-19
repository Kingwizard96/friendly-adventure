// This is a static page mocking an "About Us" section for our fake user data


export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="container pt-4">
        <p>
       I find joy in gaming, outdoor activities, and expressing creativity through drawing, painting, and photography. While currently my job is serving, I used to be a body shop technician. I ventured into HTML through YouTube, and now I'm immersed in a web development boot camp at Uconn. My skills include JavaScript, Figma, Photoshop, React, Node.js, MySQL, MongoDB, and GraphSQL. Eagerly pursuing a career as a developer or designer.
        </p>
        
        <img
          src="/src/assets/me.jpeg"
          alt="AboutPage"
          style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
        />
        <br />

      </div>
    </div>
  );
}