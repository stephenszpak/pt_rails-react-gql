import React from "react";
import { Mutation } from "react-apollo";
import { AddProjectMutation } from "./operations.graphql";
import ProcessProjectForm from '../ProcessProjectForm';
import { ProjectQuery } from '../Project/operations.graphql';

const AddProjectForm = () => (
  <Mutation mutation={AddProjectMutation}>
    {(addProject, { loading }) => (
      <ProcessProjectForm
        buttonText="Add Project"
        loading={loading}
        // Update Project query after Mutation will be finished
        onProcessProject={({ title, description, isCompleted }) =>
          addProject({
            variables: {
              title,
              description,
              isCompleted
            },

            update: (cache, { data: { addProject } }) => {
              const project = addProject.project;
              if (project) {
                const currentProjects = cache.readQuery({ query: ProjectQuery });
                cache.writeQuery({
                  query: ProjectQuery,
                  data: {
                    projects: [project].concat(currentProjects.projects),
                  }
                });
              }
            }
          })
        }
      />
    )}
  </Mutation>
);

export default AddProjectForm;
