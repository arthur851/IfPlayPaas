export default function EntrarJogo(){
    return(
        <section className="form-box">
            <h1>Entrar em um jogo</h1>
            <p>Digite o código fornecido pelo organizador.</p>
            <form>
                <label htmlFor="codigo">Código do jogo</label>
                <input type="text" id="codigo" name="codigo" required/>
                <button className="botao" type="submit">Entrar</button>
            </form>
        </section>
    )
}