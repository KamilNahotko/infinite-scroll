import React, { useState } from 'react';
import LaunchesList from '../../components/LaunchesList';
import SearchBox from '../../components/SearchBox';
import styled from 'styled-components';

const Home = () => {
  const [name, setName] = useState('');
  return (
    <Container>
      <SearchBox setName={setName} />
      <LaunchesList name={name} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 150px;
`;

export default Home;
