import { SectionBurguerContainer } from "./styles";
import hamburguer from "../../assets/hamburguer.jpg"

export function SectionBurguer() {
  return (
    <>
      <SectionBurguerContainer>

        <div className="titleBurger">
          <h1>Mais pedidos:</h1>
          <div className="linha"></div>
        </div>

        <div className="burguerinfo">

          <img src={hamburguer} alt="" />

          <div className="burguerLegend">

            <div className="titlelegend">

              <h1>Double Chesseburguer</h1>
              <div className="linhaLegend"></div>

            </div>

            <ul>
              <li>Duas carnes de picanha</li>
              <li>Pão da Casa</li>
              <li>Queijo Cheedar</li>
              <li>Geleia de pimenta</li>
            </ul>

            <button>peça agora</button>

          </div>

        </div>

        <div className="burguerinfo">

          <div className="burguerLegend">

            <div className="titlelegend">

              <h1>Double Chesseburguer</h1>
              <div className="linhaLegend"></div>

            </div>

            <ul>
              <li>Duas carnes de picanha</li>
              <li>Pão da Casa</li>
              <li>Queijo Cheedar</li>
              <li>Geleia de pimenta</li>
            </ul>

            <button>peça agora</button>

          </div>

          <img src={hamburguer} alt="" />

        </div>

        <div className="burguerinfo">

          <img src={hamburguer} alt="" />

          <div className="burguerLegend">

            <div className="titlelegend">

              <h1>Double Chesseburguer</h1>
              <div className="linhaLegend"> </div>

            </div>

            <ul>
              <li>Duas carnes de picanha</li>
              <li>Pão da Casa</li>
              <li>Queijo Cheedar</li>
              <li>Geleia de pimenta</li>
            </ul>

            <button>peça agora</button>

          </div>

        </div>

        <div className="pluscardapio">
          <h1>Cardapio Completo:</h1>
          <div className="linhaplus"></div>
        </div>

      </SectionBurguerContainer>
    </>
  )
}