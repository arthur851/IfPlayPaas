export default function CriarQuiz(){
    return(
        <section className="form-box">
            <h1>Criar quiz</h1>
            <form>
                <label htmlFor="titulo">Título do quiz</label>
                <input type="text" id="titulo" name="titulo" required/>
                <label htmlFor="descricao">Descrição</label>
                <textarea id="descricao" name="descricao" required/>
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria" name="categoria">
                    <option value="tecnologia">Tecnologia</option>
                    <option value="ciencias">Ciências</option>
                    <option value="matematica">Matemática</option>
                    <option value="historia">História</option>
                    <option value="geral">Conhecimentos gerais</option>
                </select>
                <button className="botao" type="submit">Continuar</button>
            </form>
        </section>
    )
}