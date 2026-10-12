export default function RecuperarSenha(){
    return(
        <section className="form-box">
            <h1>Recuperar senha</h1>
            <p>Informe seu e-mail para iniciar a recuperação.</p>
            <form>
                <label>E-mail</label>
                <input type="email" name="email" required/>
                <button className="botao" type="submit">Solicitar recuperação</button>
            </form>
        </section>
    )
}