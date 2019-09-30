import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { ProjectQuery } from './operations.graphql';
import UpdateProjectForm from '../UpdateProjectForm';
import cs from './styles';

const Project = () => {
  const [project, setProject] = useState(null);
  return (
    <Query query={ProjectQuery}>
      {({ data, loading }) => (
        <div className={cs.Project}>
          {loading || !data.projects ? 'Loading...' : data.projects.map(({ title, id, user, isCompleted, description }) => (
            <button key={id} className={cs.plate} onClick={() => setProject({ title, isCompleted, id, description })}>
              <div className={cs.title}>{title}</div>
              <div>{description}</div>
              <div>{isCompleted}</div>
              {user ? (<div className={cs.user}>added by {user.email}</div>) : null}
            </button>
          ))}
          {project !== null && (
            <UpdateProjectForm
              id={project.id}
              initialTitle={project.title}
              initialDescription={project.description}
              initialIsCompleted={project.isCompleted}
              onClose={() => setProject(null)}
            />
          )}
        </div>
      )}
    </Query>
  );
};

export default Project;
