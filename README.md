# 🍰 App de Receitas – Bolos de Pote

Este é um aplicativo móvel simples, desenvolvido com **React Native** e **Expo**, com o objetivo de **facilitar a vida de jovens mulheres empreendedoras** que vendem **bolos de pote** como forma de complementar a renda familiar.

## 💡 Propósito do Projeto

Durante a disciplina de **Programação para Dispositivos Móveis**, criei este app com um olhar voltado para um problema real: muitas mulheres jovens começam pequenos empreendimentos caseiros com a venda de produtos como **bolos de pote**, mas não possuem ferramentas acessíveis e organizadas para controlar suas receitas e modos de preparo.

Este aplicativo, embora simples, **pode impactar positivamente a vida dessas mulheres**, oferecendo uma ferramenta prática e funcional para **registrar, consultar, editar e excluir receitas**. Ele foi pensado para ser leve, intuitivo e funcionar totalmente **offline**, armazenando os dados no próprio dispositivo.

## 📱 Como funciona o app?

O app funciona como um **caderno digital de receitas de bolos de pote**:

1. **Cadastrar nova receita**: Clique em "Adicionar nova receita" e preencha os campos obrigatórios: nome do bolo, ingredientes e modo de preparo.
2. **Visualizar detalhes**: Toque em qualquer receita cadastrada para ver os detalhes completos.
3. **Editar**: Na tela de detalhes, é possível atualizar uma receita.
4. **Excluir**: Também é possível excluir receitas que não são mais utilizadas.
5. **Persistência local**: Todas as receitas são salvas diretamente no aparelho, sem necessidade de internet ou cadastro.

### 👩‍🍳 Dicas para quem nunca usou um app assim:
- Ao abrir o aplicativo pela primeira vez, comece cadastrando uma receita que você já conhece bem.
- Use o campo "ingredientes" como se fosse uma lista de compras.
- No campo "modo de preparo", você pode escrever passo a passo como ensina para uma amiga.
- Se errar algo, é só editar ou excluir e criar novamente.

## 🛠️ Tecnologias utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

| Tecnologia | Função |
|------------|--------|
| [**React Native**](https://reactnative.dev/) | Framework para desenvolvimento de apps móveis com JavaScript |
| [**Expo**](https://expo.dev/) | Plataforma para criação, build e preview de apps React Native |
| [**React Navigation**](https://reactnavigation.org/) | Biblioteca de navegação entre telas |
| [**AsyncStorage**](https://react-native-async-storage.github.io/async-storage/) | Armazenamento local no dispositivo |

### ✍️ Sobre o desenvolvimento

O código foi escrito utilizando o [**Snack do Expo**](https://snack.expo.dev/), que permite rodar o app diretamente no navegador ou no celular via QR Code.

O projeto é composto por múltiplas telas:
- `HomeScreen.js`: Tela inicial com a lista de receitas.
- `NovaReceitaScreen.js`: Formulário para adicionar nova receita com validação de campos.
- `DetalhesScreen.js`: Tela de visualização completa da receita com opções de editar e excluir.
- `EditarReceitaScreen.js`: Tela para alterar os dados de uma receita já cadastrada.

## 🎯 Conclusão

Esse app mostra como **a tecnologia pode ser uma aliada na vida real de empreendedoras**. Mesmo sendo um projeto introdutório, foi desenvolvido com atenção à usabilidade, persistência de dados e propósito social.

---

**Desenvolvido por [@agathva](https://github.com/agathva) como parte da disciplina de Programação para Dispositivos Móveis – UERJ Zona Oeste.**
