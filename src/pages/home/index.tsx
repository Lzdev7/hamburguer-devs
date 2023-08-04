import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { SectionBurguer } from "../../components/sectionBurguer";
import { Location } from "../../components/location"

export function Home() {
  return(
    <>
      <Header/>
      <Main/>
      <SectionBurguer/>
      <Location/>
      <Footer/>
    </>
  )
} 