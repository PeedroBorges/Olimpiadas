function pesquisar() {
    // Obtém a seção  HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    campoPesquisa = campoPesquisa.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = `<p>Desculpe, nada foi encontrado para "${campoPesquisa}"...</p>`
        return
    }

    //  --- CORRIGIR IDEIA --- posteriormente foi adicionado um codigo referente a isso,porem funcional! ---
    // if(campoPesquisa != dado.titulo) {
    //     section.innerHTML = `<p>Desculpe, nada foi encontrado para "${campoPesquisa}"...</p>`
    //     return
    //}
    //if(campoPesquisa != dado.descricao) {
    //     section.innerHTML = `<p>Desculpe, nada foi encontrado para "${campoPesquisa}"...</p>`
    //     return
    // }

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let redesocial = "";
    let tags = "";


    // Itera sobre cada dado da lista de dados e cria o HTML para cada item
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        redesocial = dado.redesocial.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se titulo 'incldudes' campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || redesocial.includes(campoPesquisa) || tags.includes(campoPesquisa))

            // Cria um novo elemento div para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <a href="${dado.social}" target="_blank">${dado.redesocial} </a>
                    <p class="descricao-meta">${dado.descricao}.</p>
                     <a href="${dado.link}" target="_blank">Mais Informações</a>
                </div> 
                `;

    }

    if (!resultados) {
        resultados = `<p>Desculpe, nada foi encontrado para "${campoPesquisa}"...</p>`

    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}