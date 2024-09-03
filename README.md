# Documentação de Requisitos

## Requisitos Funcionais (RF)

### RF001: Manutenção de Usuário
- **RN001**: O sistema deve manter os dados dos usuários com as seguintes informações:
  - Código
  - E-mail
  - Telefone
  - Nome
  - Sobrenome
  - Senha
  - CPF
  - Endereço:
    - CEP
    - Endereço
    - Número
    - Bairro
    - Cidade
    - Estado
    - Complemento

### RF002: Manutenção de Produtos
- **RN002**: O sistema deve manter os dados dos produtos com as seguintes informações:
  - Código
  - Nome
  - Preço
  - Tamanho
  - Descrição
  - Categoria

### RF003: Catálogo de Produtos
- O sistema deve ter um catálogo de produtos.

### RF004: Filtro de Produtos
- O sistema deve permitir que os usuários filtrem produtos.

### RF005: Carrinho de Compras
- **RN002**: O sistema deve manter os dados do carrinho com as seguintes informações:
  - Código do produto
  - Preço
  - Nome

### RF006: Adição de Produtos ao Carrinho
- O sistema deve permitir que os usuários adicionem produtos ao carrinho.

### RF007: Gerenciamento do Carrinho
- O sistema deve permitir que os usuários visualizem, editem (alterar quantidade ou remover itens) e finalizem a compra do carrinho.

### RF008: Manutenção de Compras
- **RN003**: O sistema deve manter os dados das compras com as seguintes informações:
  - Pedido
  - Status

### RF009: Histórico de Compras
- O sistema deve permitir que os usuários visualizem o histórico de suas compras.

### RF010: Manutenção de Estoque
- **RN004**: O sistema deve manter os dados do estoque com as seguintes informações:
  - Produto
  - Unidades

### RF011: Manutenção de Avaliações
- **RN005**: O sistema deve manter as avaliações com as seguintes informações:
  - Número de estrelas (1-5)
  - Comentário

### RF012: Exibição de Avaliações
- O sistema deve exibir as avaliações e comentários na página do produto.

## Requisitos Não Funcionais (RNF)

### RNF001: Responsividade
- O sistema deve ser responsivo e oferecer uma boa experiência em dispositivos móveis.

### RNF004: Modularidade
- O sistema deve ser construído de forma modular, permitindo a adição de novas funcionalidades sem grandes reestruturações.

### RNF005: Padrões de Codificação
- O código da aplicação deve seguir padrões de codificação e boas práticas recomendadas pelo Vue.js.

### RNF006: Interface Intuitiva
- O sistema deve ter uma interface do usuário intuitiva e fácil de usar.

### RNF007: Feedback Visual
- O sistema deve fornecer feedback visual imediato após interações do usuário, como cliques em botões ou submissão de formulários.

### RNF008: Compatibilidade
- O sistema deve ser compatível com os navegadores mais usados e dispositivos móveis com diferentes sistemas operacionais.

### RNF009: Documentação
- O sistema deve incluir documentação clara e detalhada tanto para desenvolvedores quanto para usuários finais.

### RNF010: Design no Figma
- O sistema deve ter telas no Figma.

