/*
Nos últimos cinco anos, a comunidade JavaScript tem oferecido uma transição significativa do uso do CommonJS para os módulos ECMAScript (ES Modules). Historicamente, o CommonJS foi amplamente adotado, especialmente no ambiente Node.js, devido à ausência de um sistema de módulos nativos no JavaScript. No entanto, com a padronização e implementação dos Módulos ES nos navegadores modernos e no Node.js (suporte completo a partir da versão 13.2.0), os desenvolvedores têm migrado para essa nova abordagem. Essa mudança é motivada por vantagens como a capacidade de carregamento assíncrono e otimizações de desempenho que os Módulos ES oferecem.
MEDIUM.COM

Uma das principais diferenças entre módulos CommonJS e ES é a forma como os módulos são importados e exportados. No CommonJS, utiliza-se require()para importar e module.exportspara exportar, enquanto nossos Módulos ES são usados ​​como declarações importe export. Além disso, os Módulos ES permitem facilmente nomes e padrões, proporcionando maior facilidade e eficiência na gestão de dependências. Por exemplo, é possível importar apenas partes específicas de um módulo, o que pode reduzir o uso de memória e melhorar o desempenho da aplicação.
DESENVOLVEDOR.MOZILLA.ORG

A transição para ES Modules também impactou o tamanho dos pacotes JavaScript. Devido à natureza dinâmica do CommonJS, as ferramentas de empacotamento enfrentam desafios para melhorar e eliminar códigos não utilizados, resultando em pacotes maiores. Em contraste, os Módulos ES são estáticos, permitindo que bundlers identifiquem e removam eficientemente código morto, fornecendo para pacotes mais níveis e desempenho aprimorados em aplicações web.
DESENVOLVIMENTO WEB

Em resumo, a adoção crescente dos Módulos ES nos últimos anos reflete a busca por um padrão unificado e eficiente na modularização de código JavaScript, beneficiando tanto desenvolvedores quanto usuários finais com aplicações mais rápidas e de fácil manutenção.
*/