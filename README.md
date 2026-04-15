# Refrimáquinas Distribuidora — Site Institucional

## 🏢 Sobre o Projeto

Site institucional completo, moderno e responsivo para a **Refrimáquinas Distribuidora** — a maior distribuidora de peças e equipamentos para refrigeração, climatização, ferramentas, EPI e elétrica da região Norte do Brasil (TO · PA · MA). Sede em **Araguaína — Tocantins**.

---

## ✅ Funcionalidades Implementadas

### Páginas
| Página | Arquivo | Status |
|---|---|---|
| Início | `index.html` | ✅ Completo |
| Sobre a Empresa | `sobre.html` | ✅ Completo |
| Produtos e Equipamentos | `produtos.html` | ✅ Completo |
| Blog Técnico | `blog.html` | ✅ Completo |
| Trabalhe Conosco | `trabalhe-conosco.html` | ✅ Completo |
| Contato e Orçamento | `contato.html` | ✅ Completo |

### Recursos
- **Navbar fixa** com logo, menu de navegação, botão WhatsApp e menu hamburger mobile
- **Hero section** com headline de impacto, estatísticas animadas e floating cards
- **Benefits strip** com diferenciais rápidos
- **Grid de categorias** de produtos com 8 categorias linkadas
- **Diferenciais competitivos** em cards com ícones
- **Depoimentos de clientes** com avaliação em estrelas
- **Marcas parceiras** com hover interativo
- **CTA banners** em todas as páginas
- **Formulários** de contato, orçamento e currículo com feedback visual
- **Filtro de produtos** por categoria (via URL ?cat= e via botões)
- **Busca de produtos** por texto em tempo real
- **Filtro de artigos** do blog por categoria/tag
- **Vagas de emprego** com cards detalhados
- **Mapa integrado** do Google Maps na página de Contato
- **Horário de funcionamento** visual em tabela
- **WhatsApp flutuante** com animação pulsante em todas as páginas
- **Botão de voltar ao topo** com aparição por scroll
- **Animações de entrada** via Intersection Observer
- **Contadores animados** (17.000+, 6.000m², etc.)
- **Toast notifications** para feedback de formulários
- **Footer completo** com logo, redes sociais, links, categorias e contato
- **SEO básico**: meta tags description, keywords e og:tags

---

## 🗂️ Estrutura de Arquivos

```
/
├── index.html              → Página Início
├── sobre.html              → Sobre a Empresa
├── produtos.html           → Catálogo de Produtos/Serviços
├── blog.html               → Blog Técnico
├── trabalhe-conosco.html   → Recrutamento e Vagas
├── contato.html            → Contato e Orçamento
├── css/
│   └── style.css           → Estilos globais (CSS puro)
├── js/
│   └── main.js             → Scripts globais (JS puro)
└── README.md
```

---

## 🔗 URIs e Parâmetros

| URL | Descrição |
|---|---|
| `index.html` | Página inicial |
| `sobre.html` | Sobre a empresa |
| `produtos.html` | Todos os produtos |
| `produtos.html?cat=refrigeracao` | Produtos filtrados por Refrigeração |
| `produtos.html?cat=climatizacao` | Produtos filtrados por Climatização |
| `produtos.html?cat=ferramentas` | Ferramentas |
| `produtos.html?cat=epi` | EPI |
| `produtos.html?cat=eletrica` | Material Elétrico |
| `produtos.html?cat=soldagem` | Soldagem |
| `blog.html` | Blog Técnico |
| `trabalhe-conosco.html` | Vagas e formulário de candidatura |
| `trabalhe-conosco.html#vagas` | Âncora para vagas abertas |
| `contato.html` | Formulário de contato e mapa |

---

## 🎨 Identidade Visual

| Item | Valor |
|---|---|
| Cor primária | Azul `#1565c0` |
| Cor escura | Azul escuro `#0a2a4a` |
| Cor destaque | Laranja `#f57c00` |
| Tipografia | Inter (Google Fonts) |
| Ícones | Font Awesome 6.4.0 (CDN jsDelivr) |
| Estilo | Industrial moderno, limpo, responsivo |

---

## 📱 Informações Reais da Empresa

- **Nome:** Refrimáquinas Distribuidora / Refrimaquinas Com. Maquinas e Equipamentos Ltda
- **Instagram:** [@refrimaquinas.distribuidora](https://www.instagram.com/refrimaquinas.distribuidora/)
- **Facebook:** [Loja do Refrigerista](https://www.facebook.com/LojadoRefrigerista/)
- **Endereço:** Av. Santos Dumont, 107 — Araguaína, TO (CEP 77.818-010)
- **Telefone/WhatsApp:** (63) 99294-0367
- **Horário:** Seg–Sex 7h30–18h30 | Sáb 7h30–13h
- **Atuação:** TO · PA · MA
- **Estrutura:** 6.000m² | +17.000 produtos

---

## 🚀 Próximos Passos Recomendados

1. **Integração real de formulários** — conectar os formulários de contato e currículo a serviços de e-mail (Formspree, EmailJS, etc.)
2. **Newsletter** — integrar com Mailchimp, RD Station ou similar
3. **Catálogo digital** — integração com e-commerce (refriarshop.com.br mencionado nas redes sociais)
4. **Fotos reais** — substituir ícones por imagens reais dos produtos, estoque e equipe
5. **Blog dinâmico** — integrar com CMS (Netlify CMS, Contentful, etc.) para publicação de artigos
6. **SEO avançado** — adicionar Schema.org, sitemap.xml e robots.txt
7. **Analytics** — adicionar Google Analytics / Meta Pixel
8. **Chat online** — integrar widget de WhatsApp Business (Zap.social, Chatwoot, etc.)
9. **Personalização de vagas** — atualizar vagas abertas conforme demanda real do RH
10. **Domínio e HTTPS** — publicar com domínio próprio (ex: refrimaquinas.com.br)

---

## ⚠️ O que Não Está Implementado

- Backend para processamento real de formulários (requer servidor)
- Autenticação de usuários / área do cliente
- Integração com sistema de estoque ou ERP
- Gerenciamento dinâmico de conteúdo (CMS)
- Sistema de pagamento
- Chat em tempo real

---

*Desenvolvido com HTML5, CSS3 e JavaScript puro — sem frameworks. Compatível com todos os navegadores modernos e otimizado para mobile.*
