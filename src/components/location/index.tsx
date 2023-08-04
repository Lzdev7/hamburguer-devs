import { ContainerLocation, TitleDiv } from "./styles";
import location from "../../assets/localizacao.png"

export function Location() {
  return (
    <>
      <TitleDiv>

        <h1>Nossos Restaurates</h1>
        <div className="linha"></div>

      </TitleDiv>

      <ContainerLocation>

        <div className="restaurantes">

          <img src={location} alt="" width="100" height="100" />

          <div className="namelocation">
            <h1>Angra dos Reis - Rio de Janeiro</h1>
            <h1>Shopping Piratas - Numero 78</h1>
          </div>

        </div>

        <div className="redesSociais">
          <h1> 24 - 998842442</h1>
          <h1>burgues dos devs</h1>
        </div>

      </ContainerLocation>

      <ContainerLocation>

        <div className="restaurantes">

          <img src={location} alt="" width="100" height="100" />

          <div className="namelocation">
            <h1>Angra dos Reis - Rio de Janeiro</h1>
            <h1>Shopping Piratas - Numero 78</h1>
          </div>

        </div>

        <div className="redesSociais">
          <h1> 24 - 998842442</h1>
          <h1>burgues dos devs</h1>
        </div>

      </ContainerLocation>

      <ContainerLocation>

        <div className="restaurantes">

          <img src={location} alt="" width="100" height="100" />

          <div className="namelocation">
            <h2>Angra dos Reis - Rio de Janeiro</h2>
            <h2>Shopping Piratas - Numero 78</h2>
          </div>

        </div>

        <div className="redesSociais">
          <h2> 24 - 998842442</h2>
          <h2>burgues dos devs</h2>
        </div>

      </ContainerLocation>

    </>
  )
}