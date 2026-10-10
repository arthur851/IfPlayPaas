import { Link } from "react-router-dom"
export default function Menu(){
    return(
        <header className="menu">
            <Link to="/" className="logo">ifPlay</Link>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/meus-quizzes">Meus quizzes</Link>
                <Link to="/ranking">Ranking</Link>
                <Link to="/perfil">Perfil</Link>
                <Link to="/login">Entrar</Link>
            </nav>
        </header>
    )
}