export default function Perfil({ usuario = {}, onAtualizarPerfil }){
    function salvar(event){
        event.preventDefault()
        onAtualizarPerfil?.(Object.fromEntries(new FormData(event.currentTarget)))
    }
    return(
        <section className="form-box">
            <h1>Meu perfil</h1>
            <form onSubmit={salvar}>
                <label>Nome</label>
                <input name="nome" defaultValue={usuario.nome ?? ""} required/>
                <label>E-mail</label>
                <input name="email" type="email" defaultValue={usuario.email ?? ""} required/>
                <button className="botao" type="submit">Salvar alterações</button>
            </form>
        </section>
    )
}