import { Link, useNavigate } from "react-router-dom"
export default function Login({ onLogin }){
    const navigate = useNavigate()
    function entrar(event){
        event.preventDefault()
        const dados = new FormData(event.currentTarget)
        onLogin?.({ email: dados.get("email"), senha: dados.get("senha") })
        navigate("/dashboard")
    }
    return(
        <section className="form-box">
            <h1>Entrar no ifPlay</h1>
            <form onSubmit={entrar}>
                <label>E-mail</label>
                <input type="email" name="email" required/>
                <label>Senha</label>
                <input type="password" name="senha" required/>
                <button className="botao" type="submit">Entrar</button>
            </form>
            <p><Link to="/recuperar-senha">Esqueci minha senha</Link></p>
            <p>Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </section>
    )
}