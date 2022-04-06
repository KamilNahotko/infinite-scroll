import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

interface ISearchBox {
  setName: (arg: string) => void;
}

const SearchBox = ({ setName }: ISearchBox) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <Container>
      <Span>
        <IoSearch size={25} />
      </Span>
      <Input type='search' onChange={handleSearch} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Span = styled.span`
  position: absolute;
  left: 15px;
`;

const Input = styled.input`
  width: 500px;
  padding: 15px 45px;
  border-radius: 15px;
  font-size: 1.5em;
  text-transform: uppercase;
`;

export default SearchBox;
