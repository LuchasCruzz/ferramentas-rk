# Ferramentas RK (RK Tools)

Web app multilíngue (pt-BR, es, fr, en, de) para jogadores de **Renaissance Kingdoms**, com tema medieval leve (CSS/SVG) e regras **baseadas na Wiki oficial**.

## Pré-requisitos (nível 0)

- Node.js **20+** (veja `.nvmrc`)
- Git
- Conta no GitHub
- Conta na Vercel

## 1) Rodar localmente

Abra o terminal na pasta do projeto e execute:

```bash
npm install
npm run dev
```

Acesse:
- http://localhost:3000

> Observação (Next.js 16 + next-intl): este projeto usa `src/proxy.ts` (novo nome do arquivo de middleware).  
> Se você tiver qualquer problema de roteamento/locale em ambientes específicos, teste renomear `src/proxy.ts` para `src/middleware.ts`.

## 2) Estrutura de pastas (visão rápida)

- `src/app/` — rotas Next.js (App Router)
- `src/app/[locale]/...` — rotas por idioma (`/pt-br`, `/en`, etc.)
- `src/messages/*.json` — traduções (i18n)
- `src/components/` — componentes UI, tema e ferramentas
- `src/config/ads.ts` — configuração central do AdSense (único arquivo para editar)
- `SOURCES.md` — lista de fontes (Wiki oficial) usadas no conteúdo/regras
- `DISCOVERY.md` — descoberta + MVP + backlog

## 3) Ativar/Configurar AdSense (sem quebrar layout)

1) Abra `src/config/ads.ts`
2) Edite **apenas**:

- `enabled: true`
- `clientId: 'ca-pub-SEU_ID'`
- `slotSidebar: 'SEU_SLOT'`
- `slotFooter: 'SEU_SLOT'`

Quando `enabled=false`, o site renderiza placeholders no mesmo tamanho (layout não quebra).

### Tamanhos usados
- Sidebar desktop: **300×600**
- Rodapé desktop: **728×90**
- Mobile: bloco responsivo (mantém altura mínima)

## 4) Sitemap/SEO (opcional, mas recomendado)

O sitemap usa `NEXT_PUBLIC_SITE_URL` para gerar URLs absolutas.

Na Vercel:
- Settings → Environment Variables → adicione:
  - `NEXT_PUBLIC_SITE_URL` = `https://seu-dominio.vercel.app` (ou domínio próprio)

Se você não definir, o sitemap usa `https://example.com` (apenas placeholder).

## 5) Inicializar Git e subir no GitHub (passo a passo)

Dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Initial commit: Ferramentas RK"
```

Crie um repositório vazio no GitHub (sem README). Copie a URL do repo e rode:

```bash
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

## 6) Deploy na Vercel (passo a passo)

1) Entre na Vercel e clique **Add New → Project**
2) Importe o repositório do GitHub
3) Framework: **Next.js** (auto-detect)
4) Build Command: `npm run build` (padrão)
5) Output: padrão (Next.js)
6) (Opcional) Configure `NEXT_PUBLIC_SITE_URL` e/ou o AdSense (editando `src/config/ads.ts` e commitando)

Deploy pronto.

## 7) Checklist final de QA

- [ ] `/` redireciona para `/en` (ou locale detectado via header)
- [ ] Troca de idioma no topo funciona e persiste (localStorage)
- [ ] Rotas existem: `/pt-br`, `/es`, `/fr`, `/en`, `/de`
- [ ] Home: busca filtra cards
- [ ] Módulos MVP abrem e funcionam acima da dobra no desktop
- [ ] Sidebar de anúncios aparece no desktop (>= lg)
- [ ] Rodapé renderiza faixa de pedras + anúncio 728×90 (desktop)
- [ ] Mobile: sidebar some; anúncio vira responsivo
- [ ] Página “Fontes” lista links (e `SOURCES.md` existe)
- [ ] “Sobre/Disclaimer”, “Privacidade” e “Cookies” existem

## Conteúdo e fontes

- **Regra de ouro:** regras/mecânicas/textos operacionais são fundamentados na Wiki oficial.
- Veja `SOURCES.md` e a rota **/sources** no site.

## PENDÊNCIAS

- Campo de milho: o artigo contém intervalos com `"??"` (na seção de rendimento).  
  A calculadora numérica de rendimento fica **PENDENTE** até termos uma fonte com números completos.
