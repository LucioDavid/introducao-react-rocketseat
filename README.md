# Instruções

Executar `yarn dev` para rodar o projeto.

# Anotações de Estudo de React
###### Vídeo: [COMEÇANDO NO REACT.JS EM 2022](https://www.youtube.com/watch?v=pDbcC-xSat4)

1. Todo componente em React é uma função que retorna HTML.

2. Em React não se pode ter um componente abaixo do outro sem ter algo os encapsulando (um componente, ou uma tag HTML).

3. **useState:** O método `useState` do React define uma variável que é monitorada por um componente, assim, toda vez que a variável muda, o componente é renderizado novamente.

> Ex. (nesse caso será usada para controlar componentes do tipo "Tweet"):

```typescript
[tweets, setTweets] = useState<string[]>([]);
```

  - Se a variável será usada para monitorar uma lista de componentes, o argumento deve ser um array com o estado inicial.

  - React implementa o conceito de imutabilidade, de modo que uma variável não é alterada diretamente, mas é substituída por uma cópia, com o novo valor.

4. Em React é possível utilizar CSS dentro do JavaScript (CSS in JS).

  - É possível passar um objeto para a tag `style` com os parâmetros de estilização.

5. Roteamento com React Router
  - [Apresentação](https://reactrouter.com/)
  - [Documentação](https://reactrouter.com/docs/en/v6)
    - [Instalação](https://reactrouter.com/docs/en/v6/getting-started/installation)

## Para Estudar Mais

1. CSS
  - CSS-in-JS
    - [Styled components](https://styled-components.com/)

2. Data Fetching


3. State Management


4. Testing


5. Frameworks

