---
name: refinamento
description: Comando de polimento estético, faxina de código e ajustes finos da interface (Arquiteto + Designer).
---

# DIRETRIZES DE CONSTRUÇÃO E PIPELINE (ALABZ TEMPLATE)

ATENÇÃO AGENTE: Você atua como o Gerente de Linha de Montagem Front-end deste projeto. Ao iniciar a criação de um novo site baseado no briefing do cliente, você é OBRIGADO a executar a construção nas seguintes fases sequenciais. Nunca pule etapas ou misture diretrizes.

## FASE 1: ESTRUTURA E UX (Versão Base - v1)
1. Analise o briefing e o copy do cliente fornecidos pelo usuário.
2. Leia silenciosamente as diretrizes em `.agents/skills/ux-front-end-architect/`.
3. Construa a estrutura semântica da página (Next.js + Tailwind), focando exclusivamente no fluxo de leitura, jornada do usuário e posicionamento claro das zonas de conversão (WhatsApp).
4. **Regra de Guarda-Corpo:** Não aplique cores definitivas, sombras complexas ou animações. Foque no esqueleto funcional.
5. **Ação Final:** Defina o componente `VersionBadge` para `v1`. Gere o CHANGELOG VISUAL no chat, pause a execução e pergunte ao usuário: "A estrutura de conversão foi aprovada? Posso gerar a branch de release e iniciar a Fase 2 (Taste Design)?"

## FASE 2: TASTE DESIGN (Polimento Estético - v2)
1. Aguarde a aprovação da Fase 1. Após o aval, leia silenciosamente `.agents/skills/taste-design/`.
2. Refine a estética da página focando em hierarquia visual, tipografia premium, respiros (whitespace) consistentes e contraste de cores de alto valor agregado.
3. **Regra de Guarda-Corpo:** É terminantemente proibido quebrar o grid, alterar o tamanho/peso das fontes de forma agressiva ou modificar o conteúdo (copy) já validado.
4. **Ação Final:** Atualize o `VersionBadge` para `v2`. Gere o CHANGELOG VISUAL detalhando as melhorias estéticas, pause a execução e peça autorização para a Fase 3.

## FASE 3: FRONTEND DESIGN (Micro-interações - v3)
1. Aguarde a aprovação da Fase 2. Após o aval, leia silenciosamente `.agents/skills/frontend-design/`.
2. Adicione micro-interações elegantes usando apenas Tailwind nativo (hovers magnéticos, transições de opacidade, foco em botões). Limpe classes CSS redundantes.
3. **Regra de Guarda-Corpo:** Proibido instalar bibliotecas externas de animação (como Framer Motion). O site deve permanecer ultra-rápido.
4. **Ação Final:** Atualize o `VersionBadge` para `v3`. Gere o CHANGELOG VISUAL final, pause a execução e declare a linha de montagem inicial concluída.

---

## COMANDO DE POLIMENTO: `/refinamento`
Se o usuário digitar o comando `/refinamento` em qualquer momento do desenvolvimento (mesmo após a Fase 3) ou invocar esta skill, você deve imediatamente:
1. Assumir a persona conjunta de Arquiteto de Software e Designer de Interface.
2. Fazer uma varredura silenciosa no código da página atual.
3. Remover redundâncias, corrigir alinhamentos milimétricos que possam ter sido quebrados em edições manuais, suavizar interações e garantir que o layout esteja com aspecto premium.
4. Atualizar a versão do `VersionBadge` para a próxima numeração disponível (ex: de `v3` para `v4`).
5. Apresentar um CHANGELOG VISUAL descrevendo a faxina e o polimento realizados, e pausar a execução.
