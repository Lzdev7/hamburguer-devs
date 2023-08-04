import { ContainerFooter, Dev } from "./styles";

export function Footer() {
  return(
    <>
      <ContainerFooter>
        
        <div className="contact">

          <h1>CONTAT0</h1>
          
          <div className="phone">
            <h1>24-998842442</h1>
          </div>

          <div className="email">
            <h1>luizhenrprof@gmail.com</h1>
          </div>

        </div>
        
        <div className="contact">

          <h1>QUEM SOMOS</h1>
          
          <h1>devs burguer</h1>
          <h1>nossa historia</h1>

        </div>

        <div className="contact">

          <h1>CARDAPIO</h1>
          
          <h1>Hamburguer</h1>
          <h1>BEBIDAS</h1>
          
        </div>

        <div className="contact">

          <h1>REDES SOCIAIS</h1>
          
        </div>

      </ContainerFooter>

      <Dev>
        <h1>Desenvolvido por LhzDev/</h1>
      </Dev>
    </>
  )
}