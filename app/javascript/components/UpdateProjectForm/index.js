import React from 'react';
import { Mutation } from 'react-apollo';
import { UpdateProjectMutation } from './operations.graphql';
import ProcessProjectForm from '../ProcessProjectForm';
import cs from './styles';

const UpdateProjectForm = ({
  id,
  initialTitle,
  initialDescription,
  initialIsCompleted,
  onClose
}) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <Mutation mutation={UpdateProjectMutation}>
        {(updateProject, { loading }) => (
          <ProcessProjectForm
            initialIsCompleted={initialIsCompleted}
            initialTitle={initialTitle}
            initialDescription={initialDescription}
            buttonText="Update Project"
            loading={loading}
            onProcessProject={({ title, description, isCompleted }) => {
              updateProject({
                variables: {
                  id,
                  title,
                  description,
                  isCompleted
                },
                optimisticResponse: {
                  __typename: 'Mutation',
                  updateProject: {
                    __typename: 'UpdateProjectMutationPayload',
                    project: {
                      id,
                      __typename: 'Project',
                      title,
                      description,
                      isCompleted
                    }
                  }
                }
              });
              onClose();
            }}
          />
        )}
      </Mutation>
      <button className={cs.close} onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

export default UpdateProjectForm;
