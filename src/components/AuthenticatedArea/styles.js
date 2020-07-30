import styled from 'styled-components';

export const Photo = styled.img `
  border-radius: 50%;
  height: 55px;
  margin-right: 20px;
  border: 2px solid white;
`;

export const Container = styled.div`
  display: flex;

  @media (max-width: 800px) {
    position: fixed;
    top: 1%;
    right: 1%;
  }
`;

export const Name = styled.p`
  margin: auto;

  @media (max-width: 800px) {
    display: none;
  }
`;