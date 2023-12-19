export default function ProjectPage() {
  // Sample project data with image URLs and project URLs
  const projects = [
    { id: 1, imageUrl: '/src/assets/project-1.png', title: 'Javascript Quiz', link: 'https://github.com/Kingwizard96/javascript_trivia' },
    { id: 2, imageUrl: '/src/assets/project-2.png', title: 'Note Taker', link: 'https://github.com/Kingwizard96/ideal-funicular' },
    { id: 3, imageUrl: '/src/assets/project-3.png', title: 'Weather Dashboard', link: 'https://github.com/Kingwizard96/urban-octo-train'},
    { id: 4, imageUrl: '/src/assets/project-4.gif', title: 'Work Day Scheduler', link: 'https://github.com/Kingwizard96/fantastic-robot'}
    // Add more projects as needed
  ];

  return (
    <div className="project-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.imageUrl} alt={project.title} />
          </a>
          <h4>{project.title}</h4>
        </div>
      ))}
    </div>
  );
}