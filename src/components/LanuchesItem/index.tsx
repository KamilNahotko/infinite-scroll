import React from 'react';
import styled from 'styled-components';

interface ILaunchesItem {
  setElement: (arg: HTMLElement | null) => void;
  launch: {
    mission_name: string;
  };
}

const LaunchesItem = ({ setElement, launch }: ILaunchesItem) => {
  return <Paragraph ref={setElement}>{launch.mission_name}</Paragraph>;
};

const Paragraph = styled.p`
  font-size: 2.5em;
  line-height: 2;
`;

export default LaunchesItem;
