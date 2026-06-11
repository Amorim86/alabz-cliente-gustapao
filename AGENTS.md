<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Regras Absolutas e Inegociáveis de Operação

## Deploy de Infraestrutura
É estritamente proibido usar a Vercel CLI ou tentar criar/nomear projetos diretamente na Vercel. O fluxo de deploy é 100% focado no repositório.

## Controle de Versão e Fluxo de Deploy (Homologação vs. Produção)
Antes de executar qualquer operação de commit ou push, você é ESTRITAMENTE PROIBIDO de agir por conta própria. A regra de exibição de "VersionBadge" na UI está DEFINITIVAMENTE REVOGADA; não crie ou exiba elementos visuais de versão na interface.

Toda vez que o código estiver pronto para subir para o repositório, você DEVE interromper o fluxo e me apresentar OBRIGATORIAMENTE um menu de opções no chat (use as opções de confirmação nativas da interface do Antigravity) com as seguintes alternativas:

1. **🔵 Apenas Commit Local (Sem Push):** O código será commitado localmente na branch atual para salvar o progresso, gerando e exibindo o hash do commit, mas sem realizar push.
2. **🟡 Atualizar Homologação (Vercel Preview):** O código será commitado e enviado EXCLUSIVAMENTE para a branch fixa `homologacao` para validação do cliente. É terminantemente proibido criar branches dinâmicas para features.
3. **🟢 Push para a Main (Vercel Production):** O código irá direto para a rota principal (branch `main`), acionando o deploy imediato no domínio oficial.

Aguarde a minha escolha. Execute estritamente a opção selecionada. 

Ao realizar o commit, você OBRIGATORIAMENTE deve redigir uma mensagem descritiva (commit message) clara e detalhada sobre o que foi construído ou alterado. Após o push, você DEVE me informar no chat a mensagem utilizada e o hash exato do commit gerado para fins de rastreabilidade na esteira.



## Otimização de Mídia
Sempre que for solicitado o uso de animações pesadas ou conversão de keyframes de vídeo para as landing pages, o agente deve recomendar e deixar à mão o seguinte comando correlato:
```bash
ffmpeg -i hero-flow-original.mp4 -vf "scale=1920:1080,fps=30,format=yuv420p" -c:v libx264 -preset slow -crf 18 -g 1 -keyint_min 1 -sc_threshold 0 -bf 0 -movflags +faststart -an hero-flow.mp4
```

## Servidor Local e Teste Mobile
Sempre que subir o ambiente local de um projeto, você DEVE expor o servidor para a rede local (ex: usando `next dev -H 0.0.0.0` se necessário) e me fornecer no chat duas informações de forma explícita:
1) O caminho local exato identificando a porta e a versão (ex: `http://localhost:PORTA` - [Nome do Projeto/Versão]) para evitar conflito de abas.
2) O link de IP da rede local (ex: `http://192.168.X.X:PORTA`) para eu acessar e validar o layout no smartphone.

## Arquitetura de Features e Roteamento

### Centralização
Use estritamente o `next.config.ts` para qualquer regra de roteamento. NUNCA crie ou edite `vercel.json`.

### Proxy Invisível (Rewrites)
Para rodar projetos Vercel separados como se fossem pastas do domínio principal (ex: app externo no `alabz.com.br/tableau`), use obrigatoriamente a função `rewrites()` para mascarar a URL.

### Domínios Legados (Redirects)
Para capturar subdomínios antigos e redirecionar para rotas limpas, use a função `redirects()` com validação de host (código permanente 308).

### Proibição Vercel UI
Não tente resolver redirects entre projetos via painel da Vercel. A resolução é sempre 100% via código.

<RULE[Checklist Pré-Deploy] SEO de>
Antes de autorizar o primeiro deploy em produção de qualquer novo projeto gerado por este template, você DEVE proativamente:
A) Ajustar os arquivos sitemap.ts e robots.ts substituindo o placeholder pelo domínio real do projeto.
B) Instruir o usuário a fazer o deploy e testar as rotas .xml e .txt no navegador.
C) Fornecer o passo a passo exato para o usuário adicionar a URL completa do sitemap no painel do Google Search Console.
D) Validar obrigatoriamente se o favicon do projeto (em `app/icon.png` ou `app/favicon.ico`) é perfeitamente quadrado, possui dimensões com múltiplos de 48px (ex: `192x192` ou `512x512`), é uma imagem personalizada real da marca do cliente (não sendo um placeholder padrão do Next.js/Vercel) e é gerada sem erros no HTML.
</RULE[Checklist de SEO Pré-Deploy]>

### REGRA DE VERSIONAMENTO E SEGURANÇA (VIBECODING)
É terminantemente proibido alterar as rotas do Next.js ou criar subpastas para versionamento (ex: /cliente/v1). O projeto deve rodar sempre na rota raiz.
Crie um componente global chamado VersionBadge e fixe-o no canto inferior esquerdo da tela (ex: fixed bottom-2 left-2 z-50 text-[10px] text-white/50 bg-black/50 px-2 py-1 rounded).
Este componente deve exibir uma constante definida no código (ex: const APP_VERSION = 'v1'). A versão inicial será sempre a v1.
Sempre que o agente realizar uma alteração estrutural grande ou refatoração pesada, ele DEVE autonomamente propor a atualização dessa constante para v2, v3, etc.
FLUXO DE SEGURANÇA GIT: Toda vez que o usuário aprovar uma versão e a constante for ser atualizada (ex: mudando da v1 para a v2), o agente DEVE parar imediatamente e oferecer a ação: 'Deseja que eu crie uma branch isolada para esta versão validada (ex: release/v1) e faça o commit/push antes de começarmos a mexer no código para a próxima versão?'. Só avance para alterar o código após a resposta do usuário.

### REGRA DE LARGURA DE SEÇÕES E GRID (LAYOUT FLUIDO)
É terminantemente proibido o uso da classe nativa `container` do Tailwind ou limitadores apertados como `max-w-5xl`, `max-w-6xl` e `max-w-7xl` para as seções principais do layout. Isso causa espremimento do conteúdo em telas maiores.
Para todas as seções globais (`<section>`) do site, você DEVE adotar a seguinte estrutura de grid expansivo e responsivo:
1. O wrapper principal deve usar `w-full max-w-[1400px]` (ou até `max-w-[1600px]` se o design pedir mais respiro).
2. O wrapper sempre deve ser centralizado horizontalmente com `mx-auto`.
3. Deve existir respiro lateral nativo de segurança para dispositivos móveis usando `px-4 md:px-12` ou semelhante.
**Exemplo Obrigatório de Wrapper de Seção:**
```tsx
<section className="relative w-full overflow-hidden">
  <div className="mx-auto w-full px-4 md:px-12 max-w-[1400px]">
    {/* Conteúdo da seção */}
  </div>
</section>
```

### REGRA DE FUSÃO SUAVE DE IMAGEM E DESIGN (BLEND/FADE LAYOUT)
Para layouts que utilizam uma imagem ocupando uma lateral da seção e conteúdo textual na outra, é obrigatório aplicar um efeito de fusão (blend/fade) suave para que a imagem se misture gradualmente com a cor de fundo da seção, evitando linhas divisórias secas e amadoras.

#### Diretrizes de Implementação:
1. **Container da Imagem**: Deve ser `relative` e dimensionado corretamente (ex: `w-full md:w-1/2` em layouts bipartidos).
2. **Tag da Imagem**: A imagem (seja `<img>` ou `<Image>` do Next.js) deve usar as classes `w-full h-full object-cover`.
3. **Div de Overlay Absoluto**: Posicionada na borda onde a imagem encontra o fundo da seção:
   - Se a imagem está na **esquerda** (transição para a direita): use `absolute inset-y-0 right-0 w-24 md:w-48`.
   - Se a imagem está na **direita** (transição para a esquerda): use `absolute inset-y-0 left-0 w-24 md:w-48`.
   - Classes obrigatórias no overlay: `pointer-events-none z-10`.
4. **Gradiente do Fundo**: O gradiente na div de overlay deve ir de `transparent` até a **cor exata de fundo** da seção (`COR_DE_FUNDO`).
   - Transição para a direita: `bg-gradient-to-r from-transparent to-COR_DE_FUNDO` (ex: `to-[#FDFBF7]` ou `to-white`).
   - Transição para a esquerda: `bg-gradient-to-l from-transparent to-COR_DE_FUNDO`.

#### Modelos de Disposição do Texto:
1. **Texto Alinhado (Colunas Dedicadas)**: O texto fica em sua própria coluna limpa, sem invadir a imagem.
2. **Texto Deslocado (Offset/Sobreposição)**: O texto é deslocado horizontalmente (ex: margem negativa ou posicionamento absoluto) para se sobrepor suavemente à borda fundida da imagem, criando um layout editorial premium.

**Exemplo Prático (Imagem na Esquerda com Fusão para a Direita, Fundo `#FDFBF7`):**
```tsx
<section className="relative w-full overflow-hidden bg-[#FDFBF7] py-16 md:py-24">
  <div className="mx-auto w-full px-4 md:px-12 max-w-[1400px]">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      
      {/* Container da Imagem com Efeito de Fusão */}
      <div className="relative col-span-1 md:col-span-6 h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
        <img 
          src="/exemplo-paes.jpg" 
          alt="Café e Padaria Caseira" 
          className="w-full h-full object-cover"
        />
        {/* Overlay do Gradiente de Fusão (suaviza a transição da esquerda para a direita) */}
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 pointer-events-none z-10 bg-gradient-to-r from-transparent to-[#FDFBF7]" />
      </div>

      {/* Conteúdo Textual (Opção: Alinhado na sua Coluna) */}
      <div className="col-span-1 md:col-span-6 md:pl-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-serif text-[#3D1A1A] mb-6">
          Uma pausa gostosa muda o ritmo do dia.
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
          Seja para tomar um café, encontrar alguém ou levar suas escolhas favoritas para casa.
        </p>
      </div>

      {/* Opção (Texto Deslocado/Offset): Caso queira que o texto sobreponha suavemente a fusão, 
          basta aplicar classes como md:-ml-12 md:z-20 no container de texto. */}
          
    </div>
  </div>
</section>
```