const noticias = [
  {
    titulo: "Notícias de Hoje",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    imagem: "https://picsum.photos/500/250"
  },
  {
    titulo: "Esportes: Grande Final",
    descricao: "O Cruzeiro chegou à final do Mundial depois de um jogo emocionante...",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqy0D7XoFvaFaaLTUO3kWTaWj_MQHg8bnSxg&s"
  },
  {
    titulo: "Prefeito inaugura obra",
    descricao: "Na cidade de Betim, muitas mudanças estão acontecendo...",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR55FJxab8Y6zNOaK-GuXzgWEcXDEKSE6wgQ&s/"
  }
];
function carregarCarrossel() {
  const carouselInner = document.getElementById('carousel-inner');

  noticias.slice(0, 3).forEach((noticia, index) => {
    const item = document.createElement('div');
    item.className = `carousel-item ${index === 0 ? 'active' : ''}`;

    item.innerHTML = `
        <img src="${noticia.imagem}" class="d-block w-100" alt="${noticia.titulo}" style="max-height: 400px; object-fit: cover;">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h5>${noticia.titulo}</h5>
          <p>${noticia.descricao}</p>
        </div>
      `;

    carouselInner.appendChild(item);
  });
}

function carregarNoticias() {
  const container = document.getElementById('noticias-container');

  noticias.forEach((noticia, index) => {
    const card = document.createElement('div');
    card.className = 'card mb-4 shadow-sm';

    card.innerHTML = `
      <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
      <div class="card-body">
        <h5 class="card-title">${noticia.titulo}</h5>
        <p class="card-text">${noticia.descricao}</p>
        <a href="noticia.html?id=${index}" class="btn btn-dark">Ler mais</a>
      </div>
    `;

    container.appendChild(card);
  });
}




window.addEventListener('DOMContentLoaded', carregarNoticias);
window.addEventListener('DOMContentLoaded', () => {
  carregarCarrossel();

});

document.addEventListener("DOMContentLoaded", () => { //Conteudo tecnologia
  const conteudo = document.getElementById("conteudo tecnologia");

  conteudo.innerHTML = `
      <h1 class="mb-4">Computação quântica, o que sabemos sobre?</h1>
  
      <p>
        A computação quântica pode mudar a ciência para sempre – se funcionar...
      </p>
  
      <img src="https://www.targetso.com/wp-content/uploads/2024/05/Comp-Quantica.png"
           class="img-fluid rounded my-4" alt="Imagem da notícia">
  
      <p>
        A inteligência artificial já transformou a forma como empresas processam dados e tomam decisões. Mas os maiores nomes do Vale do Silício estão de olho no que pode ser o próximo grande avanço tecnológico: a computação quântica, celebrada neste dia 14.

A data do Dia da Computação Quântica foi escolhida em referência a um dos pilares da física quântica, a constante de Planck – aproximadamente 4,14 x 10⁻¹⁵ eV·s (lembrando que, na grafia de datas em inglês, o mês vem antes do dia, por isso 4/14).

Diferente da IA, que acelera processos existentes, a computação quântica promete desbloquear capacidades totalmente novas – desde simulações de moléculas para a descoberta de medicamentos até a resolução de problemas que estão muito além do alcance dos supercomputadores mais rápidos de hoje. Segundo a consultoria McKinsey, o setor deve atingir US$ 2 trilhões até 2035.

Gigantes da tecnologia como Microsoft, Amazon, Google e Nvidia estão desenvolvendo suas próprias tecnologias quânticas, explorando como integrá-las a modelos de IA para criar uma infraestrutura pronta para o futuro. Mas há um grande obstáculo: escalar os qubits.
       
      </p>
    `;
});

document.addEventListener("DOMContentLoaded", () => { //Conteudo politica
  const conteudo = document.getElementById("conteudo politica");

  conteudo.innerHTML = `
      <h1 class="mb-4">Bolsonaro com sáude em alerta!</h1>
  
      <p>
     Hospital atualiza estado de saúde de Bolsonaro, que segue na UTI. 
      </p>
  
      <img src="https://static.poder360.com.br/2025/04/bolsonaro-internado-8abr2025-848x477.png"
           class="img-fluid rounded my-4" alt="Imagem da notícia">
  
      <p>
       O ex-presidente Jair Bolsonaro (PL) permanece internado na Unidade de Terapia Intensiva (UTI) do Hospital DF Star, em Brasília, onde foi submetido a uma cirurgia no último domingo (13/4) para tratar de obstrução intestinal. De acordo com boletim médico divulgado, o ex-chefe do Planalto mantém “boa evolução clínica”.

Bolsonaro tem boa evolução clínica, sem dor, sangramentos ou outras intercorrências. Ele mantém programação de fisioterapia motora (caminhada fora do leito) e respiratória. Entretanto, persiste a recomendação de não receber visitas e não há previsão de alta da UTI.

O boletim ainda informa que os exames laboratoriais apresentam melhora.
        
      </p>
    `;
});

document.addEventListener("DOMContentLoaded", () => { //Conteudo politica
  const conteudo = document.getElementById("conteudo esportes");

  conteudo.innerHTML = `
      <h1 class="mb-4">O fim para o rei da Champions!</h1>
  
      <p>
       Esforço até o fim mas...
        

      </p>
  
      <img src="https://a.espncdn.com/photo/2025/0416/r1479840_1296x518_5-2.jpg"
           class="img-fluid rounded my-4" alt="Imagem da notícia">
  
      <p>
        O Arsenal eliminou o Real Madrid nas quartas de final da UEFA Champions League 2024/25 com uma vitória impressionante por 5 a 1 no placar agregado. Após vencer o jogo de ida por 3 a 0 em Londres, os Gunners confirmaram a classificação ao derrotar os merengues por 2 a 1 no Santiago Bernabéu, no dia 16 de abril de 2025 .​

🏟️ Histórico de confrontos
Este confronto é raro em competições oficiais. Antes desta temporada, Real Madrid e Arsenal haviam se enfrentado apenas nas oitavas de final da Champions League 2005/06, quando o Arsenal venceu por 1 a 0 no jogo de ida e empatou em 0 a 0 no jogo de volta, avançando para as quartas de final .​

 Próximos desafios
Com a classificação, o Arsenal avançou para as semifinais da Champions League, onde enfrentará o Paris Saint-Germain (PSG). Enquanto isso, o Real Madrid volta suas atenções para as competições nacionais, buscando recuperar o desempenho após a eliminação europeia .​
Sporting News

Se desejar, posso fornecer mais detalhes sobre as estatísticas do jogo, os destaques individuais ou informações sobre os próximos confrontos do Arsenal e do Real Madrid.
      </p>
    `;
});


    const lermais = [
      {
        titulo: "Notícias de Hoje",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto amet, adipisci ullam ipsum accusamus at consequatur quos odio corporis voluptatibus quod saepe libero nesciunt voluptatum harum numquam quas rem non placeat similique expedita. Laudantium neque iusto beatae numquam inventore modi, hic, facilis, consequuntur quos tenetur magni laboriosam. Soluta excepturi ea dignissimos sapiente totam. Repellat molestiae corrupti tenetur id impedit maiores illum eos enim, omnis beatae? Dolore dolorum nihil eius nisi minus fugit esse veniam! Veniam vero minima possimus numquam quae velit, repellendus et hic praesentium expedita quis autem voluptas similique temporibus itaque, mollitia accusantium tenetur nulla beatae recusandae culpa ex ea. Accusantium atque ad sequi ex corporis maiores totam distinctio quos veritatis possimus, laudantium debitis inventore voluptatibus excepturi eum fugiat, consequatur ratione porro voluptate, at est! Mollitia, nulla iste. Sunt error neque voluptates laborum recusandae! Nulla dolorem earum blanditiis odit nam. Impedit facilis eos cupiditate id vitae dolorum sunt hic minima omnis, ipsam ullam et repudiandae atque dolores voluptate maiores nulla. Deserunt ea aperiam harum culpa, veritatis eius vitae repellendus sed quod labore ex magnam suscipit earum! Magnam hic dolores culpa obcaecati quos a quidem laboriosam harum veniam molestias? Ea aspernatur deserunt quaerat, ab modi tenetur quo ratione pariatur illum quae explicabo temporibus in mollitia enim unde odio minus distinctio dolorum harum! Ea soluta doloribus, est laboriosam dolor corporis quibusdam! At autem delectus ea obcaecati neque adipisci ipsa, exercitationem tempore cum nesciunt eum inventore consequatur numquam voluptas quia ipsam facere officiis error itaque. Commodi provident eum quod iure deserunt unde inventore reprehenderit esse! Numquam, aperiam. Ea distinctio ex repudiandae aliquam ut impedit ab dignissimos minus? Fugit ut obcaecati esse assumenda, fugiat reiciendis consequatur ratione dolor quam excepturi quaerat quod fuga optio tenetur reprehenderit quia ad sit quibusdam consequuntur. Cumque, illum voluptatem quaerat error architecto atque blanditiis corporis eos excepturi!",
        imagem: "https://picsum.photos/500/250"
      },
      {
        titulo: "Esportes: Grande Final",
        descricao: "O Cruzeiro chegou à final do Mundial depois de um jogo emocionante contra o Al Hilal",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqy0D7XoFvaFaaLTUO3kWTaWj_MQHg8bnSxg&s"
    
      },
      {
        titulo: "Prefeito inaugura obra",
        descricao: "Na cidade de Betim, muitas mudanças estão acontecendo...",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR55FJxab8Y6zNOaK-GuXzgWEcXDEKSE6wgQ&s/"
      }
    ];

    function getNoticiaId() {
      const params = new URLSearchParams(window.location.search);
      return parseInt(params.get("id"));
    }

    function exibirNoticia() {
      const id = getNoticiaId();
      const noticia = noticias[id];

      const container = document.getElementById("noticia-container");

      if (!noticia) {
        container.innerHTML = `<div class="alert alert-danger">Notícia não encontrada.</div>`;
        return;
      }

      container.innerHTML = `
        <h1 class="mb-4">${noticia.titulo}</h1>
        <img src="${noticia.imagem}" class="img-fluid rounded mb-4" alt="${noticia.titulo}">
        <p class="fs-5">${noticia.descricao}</p>
      `;
    }

    document.addEventListener("DOMContentLoaded", exibirNoticia);
