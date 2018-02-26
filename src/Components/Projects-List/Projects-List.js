import React from 'react';
import { Link } from 'react-router-dom';


function ProjectsList({ projects , deleteProject}) {
    return (<section>
        <h2>My Projects</h2>
        {projects.map((project) => {
            return <div key={project._id}>
                <Link to={`/projects/${project._id}`}>{project.name}</Link>
                <button onClick={ (ev) => deleteProject(ev, project._id)}>Delete</button>
            </div>
        })}
    </section>)
}

export default ProjectsList;
