import React, { useEffect } from 'react';
import { ProjectSubscription } from './operations.graphql';

import cs from './styles';

const Subscription = ({ subscribeToMore }) => {
  useEffect(() => {
    return subscribeToMore({
      document: ProjectSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { projectAdded, projectUpdated } = subscriptionData.data;

        if (projectAdded) {
          const alreadyInList = prev.projects.find(e => e.id === projectAdded.id);
          if (alreadyInList) {
            return prev;
          }

          return { ...prev, projects: prev.projects.concat([projectAdded]) };
        }

        if (projectUpdated) {
          return {
            ...prev,
            projects: prev.projects.map(el =>
              el.id === projectUpdated.id ? { ...el, ...projectUpdated } : el
            ),
          };
        }

        return prev;
      },
    });
  }, []);
  return null;
};

export default Subscription;

