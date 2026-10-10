import { Outlet } from "react-router-dom"
import Menu from "./Menu"
import Rodape from "./Rodape"
export default function Layout(){
    return(
        <>
            <Menu/>
            <main className="conteudo">
                <Outlet/>
            </main>
            <Rodape/>
        </>
    )
}