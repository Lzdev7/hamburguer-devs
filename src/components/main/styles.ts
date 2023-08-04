import styled from "styled-components";
import hamburguer from "../../assets/hamburguer.jpg"

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  gap: 5rem;
  background-image: url(${hamburguer});
  background-size: 50%;
  background-position: center;

  h1 {
    color: #FFF;
  }

  button {
    border: none;
    height: 30px;
    width: 150px;
    background: #EB731B;
    font-weight: bold;
    border-radius: 2px;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;