export default function Perfil(){
    return(
        <section className="form-box">
            <h1>Meu perfil</h1>
            <form>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" required/>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required/>
                <button className="botao" type="submit">Salvar alterações</button>
            </form>
        </section>
    )
}