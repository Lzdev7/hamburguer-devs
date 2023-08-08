import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Cardapio } from "./pages/cardapio";

export function Router() {
  return(
    <>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/cardapio"  element={<Cardapio/>}/>
      </Routes>
    </>
  )
}