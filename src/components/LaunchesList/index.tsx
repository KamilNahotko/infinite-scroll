import React, { useEffect, useState } from 'react';
import { GET_LAUNCHES } from '../../graphql/queries/launches';
import { useQuery } from '@apollo/client';
import LaunchesItem from '../LanuchesItem';
import styled from 'styled-components';

interface ILaunches {
  mission_name: string;
  id: string;
}

interface ILaunchesList {
  name: string;
}

const LaunchesList = ({ name }: ILaunchesList) => {
  const [launches, setLaunches] = useState<Array<ILaunches>>([]);
  const [limit, setLimit] = useState(10);
  const [element, setElement] = useState<HTMLElement | null>(null);

  const { data, loading, error } = useQuery(GET_LAUNCHES, {
    variables: { limit, name },
  });

  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setLimit((prev) => prev + 10);
        }
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    if (data) {
      setLaunches(data.launchesPast);
    }
  }, [data]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <>
      {launches.map((launch) => (
        <LaunchesItem key={launch.id} launch={launch} setElement={setElement} />
      ))}
      {loading && <Paragraph>Loading...</Paragraph>}
      {error && <Paragraph>Something went wrong :(</Paragraph>}
    </>
  );
};

const Paragraph = styled.p`
  padding: 25px;
  font-size: 2em;
  font-weight: bold;
`;

export default LaunchesList;
