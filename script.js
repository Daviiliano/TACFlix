// script.js
const filmes = {
  genero1: [ // COMÉDIA
    { 
      nome: 'Todo Mundo em Pânico', 
      imagem: 'todo_mundo_em_panico.jpg', 
      classificacao: '14', 
      ano: 2000, 
      duracao: '1h 28m', 
      sinopse: 'É uma paródia de filmes de terror, onde um grupo de adolescentes enfrenta situações absurdas e hilárias enquanto um assassino mascarado os persegue.', 
      trailer: '' 
    },
    { 
      nome: 'Minha Mãe É Uma Peça', 
      imagem: 'minha_mae_e_uma_peca.jpg', 
      classificacao: '12', 
      ano: 2013, 
      duracao: '1h 24m', 
      sinopse: 'Dona Hermínia é uma mãe divertida e exagerada, vivendo confusões com seus filhos e os dramas familiares.', 
      trailer: '' 
    },
    { 
      nome: 'As Branquelas', 
      imagem: 'as_branquelas.jpg', 
      classificacao: '12', 
      ano: 2004, 
      duracao: '1h 49m', 
      sinopse: 'Dois agentes do FBI se disfarçam de patricinhas ricas para investigar um sequestro, gerando situações hilárias.', 
      trailer: '' 
    },
    { 
      nome: 'Ted', 
      imagem: 'ted.jpg', 
      classificacao: '16', 
      ano: 2012, 
      duracao: '1h 46m', 
      sinopse: 'Ted é sobre um homem imaturo que vive com seu ursinho de pelúcia falante, trazido à vida por um desejo de infância.', 
      trailer: '' 
    },
    { 
      nome: 'Denis, o Pimentinha', 
      imagem: 'denis_o_pimentinha.jpg', 
      classificacao: 'Livre', 
      ano: 1993, 
      duracao: '1h 35m', 
      sinopse: 'Denis é um garotinho travesso que vive causando confusão na vizinhança, especialmente para o Sr. Wilson.', 
      trailer: '' 
    }
  ],

  genero2: [ // ANIMAÇÃO
    { 
      nome: 'Detona Ralph', 
      imagem: 'detona_ralph.jpg', 
      classificacao: 'Livre', 
      ano: 2012, 
      duracao: '1h 41m', 
      sinopse: 'Detona Ralph é sobre um vilão de videogame que quer ser herói e acaba bagunçando outros jogos na tentativa de se provar.', 
      trailer: '' 
    },
    { 
      nome: '9: A Salvação', 
      imagem: '9_a_salvacao.jpg', 
      classificacao: '12', 
      ano: 2009, 
      duracao: '1h 19m', 
      sinopse: 'Pequenas criaturas de pano lutam para sobreviver e derrotar máquinas que destruíram a humanidade.', 
      trailer: '' 
    },
    { 
      nome: 'Madagascar', 
      imagem: 'madagascar.jpg', 
      classificacao: 'Livre', 
      ano: 2005, 
      duracao: '1h 26m', 
      sinopse: 'Quatro animais do zoológico de Nova York acabam perdidos na selva de Madagascar e precisam aprender a viver fora do cativeiro.', 
      trailer: '' 
    },
    { 
      nome: 'A Festa da Salsicha', 
      imagem: 'a_festa_da_salsicha.jpg', 
      classificacao: '18', 
      ano: 2016, 
      duracao: '1h 29m', 
      sinopse: 'Animação irreverente sobre alimentos que descobrem a verdade sobre seu destino, gerando caos e humor adulto.', 
      trailer: '' 
    },
    { 
      nome: 'A Casa Monstro', 
      imagem: 'a_casa_monstro.jpg', 
      classificacao: '10', 
      ano: 2006, 
      duracao: '1h 31m', 
      sinopse: 'Três crianças descobrem que uma casa da vizinhança é viva e assustadora, e precisam detê-la antes que faça mais vítimas.', 
      trailer: '' 
    }
  ],

  genero3: [ // TERROR
    { 
      nome: 'Gremlins', 
      imagem: 'gremlins.jpg', 
      classificacao: '12', 
      ano: 1984, 
      duracao: '1h 46m', 
      sinopse: 'Criaturas fofas que se transformam em monstros perigosos quando regras simples são quebradas.', 
      trailer: '' 
    },
    { 
      nome: 'Annabelle', 
      imagem: 'annabelle.jpg', 
      classificacao: '14', 
      ano: 2014, 
      duracao: '1h 39m', 
      sinopse: 'A história de uma boneca possuída por um espírito demoníaco que aterroriza uma família após ser trazida para casa.', 
      trailer: '' 
    },
    { 
      nome: 'Chucky', 
      imagem: 'chucky.jpg', 
      classificacao: '18', 
      ano: 1988, 
      duracao: '1h 27m', 
      sinopse: 'Chucky é um boneco possuído pelo espírito de um assassino em série que começa a matar pessoas.', 
      trailer: '' 
    },
    { 
      nome: 'Tower', 
      imagem: 'tower.jpg', 
      classificacao: '14', 
      ano: 2016, 
      duracao: '1h 36m', 
      sinopse: 'Documentário animado sobre o tiroteio na Universidade do Texas em 1966, narrado por sobreviventes.', 
      trailer: '' 
    },
    { 
      nome: 'Esqueceram de Mim', 
      imagem: 'esqueceram_de_mim.jpg', 
      classificacao: 'Livre', 
      ano: 1990, 
      duracao: '1h 43m', 
      sinopse: 'Um garoto é deixado sozinho em casa por engano e precisa se defender de dois ladrões atrapalhados.', 
      trailer: '' 
    }
  ]
};
};


let idadeUsuario = 0;


function inserirNome() {
  let nomeUsuario = prompt("Qual o seu nome?");
  let elemento = document.querySelector("#nome-usuario");
  elemento.textContent = `Olá, ${nomeUsuario}! Espero te ajudar a escolher um filme!`;
}


function validarIdade() {
  const input = document.getElementById('idade');
  idadeUsuario = parseInt(input.value);
  if (!isNaN(idadeUsuario) && idadeUsuario >= 0) {
    document.getElementById('menu-generos').classList.remove('oculto');
  } else {
    alert('Por favor, digite uma idade válida.');
  }
}


function mostrarFilmes(genero) {
  const container = document.getElementById('conteudo-filmes');
  container.innerHTML = '';


  filmes[genero].forEach(filme => {
    if (verificarClassificacao(filme.classificacao)) {
      const div = document.createElement('div');
      div.classList.add('filme');


      div.innerHTML = `
  	<h2>${filme.nome}</h2>
 	 <img src="${filme.imagem}" alt="${filme.nome}" />
  	<p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
  	<p><strong>Ano:</strong> ${filme.ano}</p>
  	<p><strong>Duração:</strong> ${filme.duracao}</p>
  	<p><strong>Sinopse:</strong> ${filme.sinopse}</p>


  	<iframe 
    		src="https://www.youtube.com/embed/${filme.trailer}"
   		 allowfullscreen>
  	</iframe>
`;


      container.appendChild(div);
    }
  });
}


function verificarClassificacao(classificacao) {
  if (classificacao === 'Livre') return true;
  return idadeUsuario >= parseInt(classificacao);
}


inserirNome();
