import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query Launches($limit: Int!, $name: String!) {
    launchesPast(limit: $limit, find: { mission_name: $name }) {
      mission_name
      id
    }
  }
`;
