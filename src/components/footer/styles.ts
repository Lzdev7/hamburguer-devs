import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: #EB731B;
  margin-top: 10rem;
  gap: 13rem;
  
  .contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 1rem;
    }
  }
`;

export const Dev = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #000;
  height: 30px;

  h1 {
    font-size: 1rem;
  }
`;