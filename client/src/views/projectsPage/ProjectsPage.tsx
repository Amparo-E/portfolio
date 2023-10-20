import style from "./projectsPage.module.css";
import { principalProjects } from "./dataProjects";
// replanterme pasar cosas a createAdd, ver elementos que se repiten

const ProjectsPage = () => {
  return (
    <div className={style.content}>
      <h2>Projects that may interest you</h2>

      <div className={style.content_projects}>
        {principalProjects?.map((project: any, index: number) => (
          <article className={style.projects_card} key={index}>
            <img src={project.src} />
            <div className={style.projects_info}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.technologies?.map((technologie: any, index: number) => (
                <span key={index}>{technologie}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      
      <h2>Other projects</h2>
        
    </div>
  );
};

export default ProjectsPage;
