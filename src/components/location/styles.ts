import { styled } from "styled-components";

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    margin-top: 9rem;
  }

  .linha {
    height: 2px;
    width: 150px;
    background:#EB731B;
    margin-left: 5rem;
  }
`;

export const ContainerLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30rem;
  margin-top: 5rem;

  h1 {
    font-size: 1.5rem;
  }
  

  .restaurantes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;


    .redesSociais {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;