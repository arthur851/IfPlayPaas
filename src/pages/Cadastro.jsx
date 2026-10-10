import { Link, useNavigate } from "react-router-dom"
export default function Cadastro({ onCadastrar }){
    const navigate = useNavigate()
    function cadastrar(event){
        event.preventDefault()
        const dados = Object.fromEntries(new FormData(event.currentTarget))
        if(dados.senha !== dados.confirmarSenha){
            alert("As senhas não coincidem.")
            return
        }
        onCadastrar?.(dados)
        navigate("/dashboard")
    }
    return(
        <section className="form-box">
            <h1>Criar conta</h1>
            <form onSubmit={cadastrar}>
                <label>Nome</label>
                <input name="nome" required/>
                <label>E-mail</label>
                <input type="email" name="email" required/>
                <label>Senha</label>
                <input type="password" name="senha" minLength="8" required/>
                <label>Confirmar senha</label>
                <input type="password" name="confirmarSenha" required/>
                <button className="botao" type="submit">Cadastrar</button>
            </form>
            <p>Já tem conta? <Link to="/login">Entrar</Link></p>
        </section>
    )
}