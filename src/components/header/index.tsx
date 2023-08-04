import { HeaderContainer } from "./styles";

export function Header() {
  return(
    <>
      <HeaderContainer>

        <div className="menuHeader">
          <ul>
            <li>UNIDADES</li>
            <li>CARDAPIO</li>
            <li className="logo" >BURGUER DOS DEV/S</li>
            <li>DELIVERY</li>
            <li>CONTATO</li>
          </ul>
        </div>

      </HeaderContainer>
    </>
  )
}