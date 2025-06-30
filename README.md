<div align="center">

![Pokédex Logo](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png)

# 🐾 Pokédex - Kanto Edition

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![PokeAPI](https://img.shields.io/badge/PokeAPI-FFCB05?style=for-the-badge&logo=pokemon&logoColor=black)](https://pokeapi.co/)

</div>

## 📋 Sobre o Projeto

Esta é uma **Pokédex interativa** que apresenta Pokémon da primeira geração (Kanto) com carregamento paginado. O projeto carrega inicialmente 10 Pokémon e permite carregar mais através de um botão "Load More", suportando até 151 Pokémon.

O projeto foi desenvolvido como parte do **Bootcamp Fullstack Java + Angular** da [DIO](https://dio.me), focando em:
- Consumo de APIs REST (PokeAPI)
- Manipulação do DOM com JavaScript
- Design responsivo e moderno
- Boas práticas de desenvolvimento front-end

## ✨ Funcionalidades

- 🎯 **Exibição de Cards**: Interface visual com cards dos Pokémon em grid responsivo
- 🏷️ **Informações Detalhadas**: Nome, número e tipos de cada Pokémon
- 📱 **Design Responsivo**: Grid adaptável (1-4 colunas conforme tamanho da tela)
- 🚀 **Consumo de API**: Integração com a PokeAPI para dados em tempo real
- 🌈 **Cores Dinâmicas**: Cards coloridos baseados no tipo principal dos Pokémon
- ⏬ **Carregamento Paginado**: Botão "Load More" para carregar mais Pokémon
- 🎨 **Tipografia Moderna**: Fonte Roboto integrada do Google Fonts

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica da página
- **CSS3**: Estilização moderna e responsiva com Grid Layout
- **JavaScript ES6+**: Lógica de programação e consumo de API
- **PokeAPI**: API REST para dados dos Pokémon
- **Normalize.css**: Reset CSS para consistência entre navegadores
- **Google Fonts**: Fonte Roboto para tipografia moderna

## 📁 Estrutura do Projeto

```
Pokedex/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   ├── global.css      # Estilos globais
│   │   └── pokedex.css     # Estilos específicos da Pokédex
│   └── js/
│       ├── main.js         # Script principal
│       ├── poke-api.js     # Integração com PokeAPI
│       └── pokemon-model.js # Modelo de dados do Pokémon
└── README.md               # Documentação
```

## 🚀 Como Executar

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd Pokedex
   ```

2. **Abra o arquivo `index.html` em um navegador** ou use um servidor local:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   
   # Com Live Server (VS Code)
   # Clique com botão direito no index.html > "Open with Live Server"
   ```

3. **Acesse** no seu navegador:
   - Diretamente: Abra o arquivo `index.html`
   - Com servidor local: `http://localhost:8000`

## 📱 Como Usar

1. A página carrega automaticamente os primeiros 10 Pokémon
2. Clique no botão **"Load More"** para carregar mais 10 Pokémon
3. Continue clicando até carregar todos os 151 Pokémon da primeira geração
4. O botão desaparecerá quando todos os Pokémon forem carregados

## 📱 Preview

<p align="center">
  <img src="https://imgur.com/4AjOkDo.png" alt="Pokédex Preview" width="800px"/>
</p>

## 🎮 Funcionalidades Técnicas

### **Carregamento Paginado**
- Carrega inicialmente 10 Pokémon
- Botão "Load More" para carregar mais 10 por vez
- Suporte para até 151 Pokémon (primeira geração completa)
- Remoção automática do botão ao atingir o limite

### **Design Responsivo**
- **Mobile**: 1 coluna
- **Tablet (≥380px)**: 2 colunas  
- **Desktop Small (≥576px)**: 3 colunas
- **Desktop Large (≥992px)**: 4 colunas

### **Cores por Tipo**
O projeto inclui cores específicas para todos os tipos de Pokémon:
- Normal, Grass, Fire, Water, Electric, Ice
- Ground, Flying, Poison, Fighting, Psychic
- Dark, Rock, Bug, Ghost, Steel, Dragon, Fairy

### **Estrutura de Dados**
- **Pokemon Model**: Classe para estruturar dados dos Pokémon
- **PokeAPI Integration**: Consumo da API com tratamento de dados
- **DOM Manipulation**: Geração dinâmica de cards via JavaScript

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📞 Contato

- **GitHub**: [Enzfx](https://github.com/Enzfx)
- **LinkedIn**: [enzfrx](https://www.linkedin.com/in/enzfrx/)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>⭐ Se este projeto foi útil para você, considere dar uma estrela!</p>
  <p>Desenvolvido com ❤️ como parte do Bootcamp DIO</p>
</div>