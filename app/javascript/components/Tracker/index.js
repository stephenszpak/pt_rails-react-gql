import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TrackerQuery = gql`
  {
    projects {
      id
      title
      user {
        email
      }
    }
  }
`;

export default () => (
  <Query query={TrackerQuery}>
    {({ data, loading }) => (
      <div>
        {loading
          ? 'loading...'
          : data.projects.map(({ title, id, user }) => (
              <div key={id}>
                <b>{title}</b> {user ? `added by ${user.email}` : null}
              </div>
            ))}
      </div>
    )}
  </Query>
);
