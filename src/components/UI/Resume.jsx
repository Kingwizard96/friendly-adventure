export default function Resume() {
    return (
      <div className="resume-container">
        <div className="container pt-4">
          <h2 className="text-left">My Resume</h2>
          <p>
            Below is a link to download my resume:
          </p>
          <img 
          src="/src/assets/resume.png" 
          alt="Resume" 
          style={{ 
            width: '100%',
            maxWidth: '500px', 
            height: 'auto', 
            borderRadius:'8px', 
            boxShadow: 'rgba(7, 24, 23, 31.1) 10px 15px 15px'
            }} />
            <br />
            <br />
          <p>
            <a href="./public/Kingwizard-resume.docx" style={{color:'blue'}} download>
              Download My Resume (Word Document)
            </a>
          </p>
        </div>
      </div>
    );
  }