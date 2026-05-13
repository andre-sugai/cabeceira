# Cabeceira Design System — Tokens

Pacote de tokens da Cabeceira em três formatos. Use o que servir ao seu fluxo.

## Conteúdo

| Arquivo | Para quê |
|---|---|
| `cabeceira-tokens.css` | CSS Variables prontas. `@import` ou `<link>` e use `var(--primary)` etc. |
| `tokens.json` | W3C Design Tokens. Importe no Figma via **Tokens Studio** ou rode no **Style Dictionary**. |
| `tailwind.config.js` | Snippet com `theme.extend` para projetos Tailwind. |

## CSS

```html
<link rel="stylesheet" href="cabeceira-tokens.css" />
```

```css
.btn-primary {
  background: var(--primary);
  color: #fff;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-primary-20);
}
```

## Figma (via Tokens Studio)

1. Instale o plugin **Tokens Studio for Figma** no seu arquivo.
2. Abra o plugin → **Tools** → **Load from file/folder/preset** → **Single file**.
3. Selecione `tokens.json` deste pacote.
4. Em **Settings**, ative *Update Variables on apply* para criar Variables nativas do Figma.

> Cores, raios, sombras, tipografia e espaçamento entram como conjuntos navegáveis.

## Style Dictionary

```bash
npm i -D style-dictionary
npx style-dictionary build --config style-dictionary.config.js
```

Aponte sua configuração para `tokens.json` como source.

## Tailwind

Mescle `tailwind.config.js` deste pacote com o do seu projeto:

```js
const cabeceira = require("./tokens/tailwind.config.js");
module.exports = {
  ...cabeceira,
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"]
};
```

Carregue Plus Jakarta Sans e os Material Icons no `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" rel="stylesheet" />
```

## Marca

A marca em SVG (`logo_cabeceira.svg`) está em coral `#F89C96`. Use somente:
- Coral sobre fundo claro (`#FAFAF8`)
- Coral sobre fundo verde-mata (`#0A120E` / `#013220`)

Nunca tinja, gire, distorça ou aplique sobre fundos hostis.

— *Cabeceira · Cooperativa Agroecológica*
