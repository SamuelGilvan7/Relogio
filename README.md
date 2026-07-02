# ⏱️ Meu Timer / Cronômetro

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Um cronômetro web interativo e responsivo construído com **JavaScript Puro (Vanilla)**. O foco deste projeto foi aplicar conceitos avançados de manipulação do DOM, gerenciamento de eventos assíncronos e formatação de tempo nativa.

---

## 🚀 Funcionalidades

* **Iniciar:** Inicia a contagem de tempo (segundo a segundo).
* **Pausar:** Interrompe o cronômetro e altera a cor do texto para indicar o estado pausado.
* **Zerar:** Reseta o contador instantaneamente para `00:00:00`.
* **Tratamento de Bugs:** O sistema limpa os intervalos pendentes antes de iniciar um novo, impedindo que múltiplos cliques acelerem o contador.

---

## 🧠 Conceitos Praticados

Este projeto foi fundamental para consolidar boas práticas de desenvolvimento web:

* **Event Delegation (Delegação de Eventos):** Em vez de criar múltiplos escutadores para cada botão, foi utilizado um único `addEventListener` no `document` para capturar os cliques e verificar os alvos com `element.target`. Isso melhora drasticamente a performance e o consumo de memória da aplicação.
* **Objeto Date & Fuso Horário:** Uso do construtor `new Date()` combinado com `.toLocaleTimeString()` configurado em `UTC` para formatar os segundos no padrão `HH:MM:SS` sem a necessidade de cálculos matemáticos manuais complexos.
* **Funções de Intervalo:** Controle de concorrência com `setInterval` e `clearInterval`.
* **Manipulação de Classes CSS:** Feedback visual dinâmico adicionando e removendo classes de acordo com as ações do usuário.

---

## 📂 Estrutura do Projeto

```text
├── index.html
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── mainn.js
```
## 🛠️ Como Executar
Clone este repositório:


```
Bash

git clone [https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git)



```
Navegue até a pasta do projeto e abra o arquivo index.html em seu navegador de preferência.

⭐ Se você gostou desse projeto de estudos, sinta-se à vontade para deixar uma estrela!
