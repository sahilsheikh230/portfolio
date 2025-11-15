export default function Project({name,description,technologies,url,github,logo}){
    return (



      <div className="project-card text-start ">
        <img src={logo} alt="logo" className="logo mt-1 mb-2 mt-2 ms-3"></img>
  <h3 className="project-name mt-1 fs-4 ms-3 mb-2">{name}</h3>
  <p className="mt-1 ms-2 project-description">{description}</p>

  <div className="project-technologies mt-2 ms-3">
    {technologies.map((tech, index) => (
      <span key={index} className="badge  text-dark me-2 border border-dark">
        {tech}
      </span>
    ))}
  </div>
  <div className="mt-3 text-start ms-3 mb-1">
 <a href={url} className="project-btn mb-5 mt-1 ">
  <i className="fa-solid fa-globe me-2"></i>
  Website
</a>

<a href={github} className="project-btn mb-5 mt-2 ms-2">
  <i className="fa-brands githublink fa-github me-2"></i>
  Github
</a>
</div>
</div>



    )
}