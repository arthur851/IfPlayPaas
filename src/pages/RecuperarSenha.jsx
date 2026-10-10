export default function RecuperarSenha({ onRecuperarSenha }){
    function recuperar(event){
        event.preventDefault()
        const email = new FormData(event.currentTarget).get("email")
        onRecuperarSenha?.(email)
    }
    return(
        <section className="form-box">
            <h1>Recuperar senha</h1>
            <p>Informe seu e-mail para iniciar a recuperação.</p>
            <form onSubmit={recuperar}>
                <label>E-mail</label>
                <input type="email" name="email" required/>
                <button className="botao" type="submit">Solicitar recuperação</button>
            </form>
        </section>
    )
}