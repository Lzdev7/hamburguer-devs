import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-bottom: 3px solid #EB731B;

  .menuHeader ul {
    display: flex;
    gap: 10rem;
  }

  .menuHeader li {
    cursor: pointer;
    font-weight: bold;
  }

  .logo {
    color: #EB731B;
  }
  
`;