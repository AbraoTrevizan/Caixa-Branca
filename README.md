**Este repositório foi criado para a atividade de revisão de código passada na disciplina. Aqui eu coloquei o código que recebemos e fiz a análise que o professor pediu. Primeiro eu revisei o código original e avaliei alguns pontos, como documentação, nomes de variáveis, organização, possíveis NullPointers e o fechamento da conexão com o banco.**

**O código original não tinha quase nenhum comentário, então ficava difícil entender algumas partes. As variáveis também não tinham nomes tão descritivos. A organização não estava muito boa e também não tinha tratamento para todos os NullPointers. Outro problema é que a conexão com o banco não era fechada, o que pode gerar erro futuramente.**

**Depois disso eu preenchi a planilha de teste de caixa branca estática com base nessa análise. A planilha está aqui no repositório.**

**A partir do código, eu fiz a notação do grafo de fluxo identificando cada decisão do método. Com isso consegui contar os nós e as arestas e calcular a complexidade ciclomática usando a fórmula:**

**V(G) = E – N + 2**

**Na contagem eu cheguei ao seguinte:**

**V(G) = 9 – 8 + 2 = 3**

**Então o método tem complexidade 3, o que significa que existem 3 caminhos básicos que precisam ser testados. Listei eles aqui:**

**Caminho onde o usuário existe no banco e o login funciona.**

**Caminho onde o usuário não é encontrado.**

**Caminho onde acontece algum erro (exceção) no processo.**

**Esses caminhos cobrem todo o fluxo do código.**

**O código comentado está na pasta /src. Eu deixei explicando o que cada parte faz, como foi pedido na atividade. Também deixei a planilha e este README com todos os cálculos.**
