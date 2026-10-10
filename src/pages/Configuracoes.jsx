export default function Configuracoes({ configuracoes = {}, onSalvar }){
    function salvar(event){
        event.preventDefault()
        const dados = new FormData(event.currentTarget)
        onSalvar?.({ notificacoes: dados.get("notificacoes")==="on", tema: dados.get("tema") })
    }
    return(
        <section className="form-box">
            <h1>Configurações</h1>
            <form onSubmit={salvar}>
                <label><input type="checkbox" name="notificacoes" defaultChecked={configuracoes.notificacoes ?? true}/> Receber notificações</label>
                <label>Tema</label>
                <select name="tema" defaultValue={configuracoes.tema ?? "claro"}>
                    <option value="claro">Claro</option>
                    <option value="escuro">Escuro</option>
                </select>
                <button className="botao" type="submit">Salvar configurações</button>
            </form>
        </section>
    )
}