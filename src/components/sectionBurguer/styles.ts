import styled from "styled-components";

export const SectionBurguerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;

  .titleBurger {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.5rem;
    }

    .linha {
      width: 130px;
      height: 2px;
      background:#EB731B;
      margin-left: 30px;
    }
  }

    .burguerinfo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
      gap: 12rem;

      img {
        width: 600px;
        border-radius:7px;
      }

      .burguerLegend {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        li {
          color: #EB731B;
          font-weight: bold;
        }

        button {
          width: 150px;
          height: 30px;
          border: none;
          background: #EB731B;
          font-weight: bold;
          border-radius:4px;
          font-weight: bold;
          font-size: 0.9rem;
          margin-left: 14rem;
        }

        .titlelegend {
          display: flex;
          flex-direction: column;

          .linhaLegend {
            height: 2px;
            background: #EB731B;
            width: 200px;
            margin-left: 10rem;
          }
        }
        
      }
    }

    .pluscardapio {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      margin-left: 59rem;

      .linhaplus {
        width: 100px;
        height: 2px;
        background: #EB731B;
        margin-left: 8rem;
      }

    }

    .pluscardapio h1 {
      font-size: 1.5rem;
    }
`;