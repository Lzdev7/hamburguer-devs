import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: #EB731B;
  margin-top: 10rem;
  gap: 10rem;

  h1 {
    cursor: pointer;
    transition: all 1s ease-in-out;
    font-size: 3rem;

    &:hover {
      color: #FFF;
      transition: all 1s ease-in-out;
    }
  }
  
  .contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: 1.3rem;
    }

    .iconSocialMedia {
      display: flex;
      gap: 10px;

      img {
        width: 40px;
        cursor: pointer;
      }
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