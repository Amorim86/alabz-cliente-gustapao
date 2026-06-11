---
name: pre-deploy
description: Comando de pré-deploy para blindagem e execução das 5 skills estratégicas em cascata antes da publicação.
---

# Comando de Pré-Deploy (/pre-deploy)

Se o usuário digitar `/pre-deploy` em qualquer momento ou acionar esta skill, você deve imediatamente:

1. **Execução em Cascata**: Executar as 5 skills estratégicas silenciosamente e em sequência:
   - `seo-metadata-architect` (Garantir injeção de `metadataBase`, favicon e Open Graph/Twitter card para visualização em compartilhamentos)
   - `analytics-tag-integrator`
   - `conversion-microcopy`
   - `lead-capture-guardian`
   - `mobile-touch-optimizer`
2. **Bloqueio de Layout**: Bloquear absolutamente qualquer modificação visual de layout (preservar design, cores, fontes, grid e Tailwind).
3. **Changelog**: Exibir um **CHANGELOG DE BLINDAGEM** detalhado no chat informando tudo o que foi configurado e injetado.
4. **Finalização**: Pausar a execução e declarar a aplicação pronta para deploy na Vercel.
