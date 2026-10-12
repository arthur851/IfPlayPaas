export default function Cadastro(){
    return(
        <section className="form-box">
            <h1>Criar conta</h1>
            <form>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" required/>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" name="senha" required/>
                <label htmlFor="confirmar-senha">Confirmar senha</label>
                <input type="password" id="confirmar-senha" name="confirmarSenha" required/>
                <button className="botao" type="submit">Cadastrar</button>
            </form>
            <p>Já tem conta? <a href="/login">Entrar</a></p>
        </section>
    )
}