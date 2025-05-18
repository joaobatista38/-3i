function getParametroUrl(nome) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nome);
  }
  
  async function carregarNoticia() {
    const id = getParametroUrl('id');
    const container = document.getElementById('noticia-container');
  
    try {
      const resposta = await fetch('noticias.json');
      const noticias = await resposta.json();
  
      const noticia = noticias[id];
  
      if (!noticia) {
        container.innerHTML = `<div class="alert alert-danger">Notícia não encontrada.</div>`;
        return;
      }
  
      container.innerHTML = `
        <h1 class="mb-4">${noticia.titulo}</h1>
        <img src="${noticia.imagem}" class="img-fluid rounded mb-4" alt="${noticia.titulo}">
        <p>${noticia.descricao}</p>
        ${noticia.conteudo}
      `;
    } catch (erro) {
      container.innerHTML = `<div class="alert alert-danger">Erro ao carregar a notícia.</div>`;
      console.error("Erro ao buscar notícias:", erro);
    }
  }
  
  window.addEventListener('DOMContentLoaded', carregarNoticia);
  