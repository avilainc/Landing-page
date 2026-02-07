# AvilaOps Website

Website institucional da AvilaOps desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Icons** - Biblioteca de ícones

## 📋 Páginas

O website possui as seguintes páginas:

- **Home** (`/`) - Página inicial com apresentação dos serviços
- **Sobre Nós** (`/sobre-nos`) - História e valores da empresa
- **Serviços** (`/servicos`) - Detalhamento de todos os serviços oferecidos:
  - SEO
  - Gestão de Redes Sociais
  - Publicidade Online
  - Criação de Websites e Lojas Online
  - Design e Branding
  - Marketing de Influência
  - Estratégia Digital
- **Portfólio** (`/portfolio`) - Projetos realizados
- **Ferramentas** (`/ferramentas`) - Calendário de redes sociais e outras ferramentas
- **Blog** (`/blog`) - Artigos sobre marketing digital
- **Contatos** (`/contatos`) - Formulário de contato e informações

## 🏢 Endereços

### Portugal 🇵🇹
- **Endereço:** Rua Almada 333, 2 Andar - Porto, Portugal
- **Telefone:** (+351) 910 205 562

### Brasil 🇧🇷
- **Endereço:** Rua Padre Clemente Marton Segura, 295 - São José do Rio Preto-SP, Brasil
- **Telefone:** (+55) 17 99781 1471

### E-mail
- **Atendimento:** atendimento@avilaops.com

## 🛠️ Instalação

1. Clone o repositório ou navegue até a pasta do projeto

2. Instale as dependências:
```bash
npm install
```

## 💻 Desenvolvimento

Para rodar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🏗️ Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

Para iniciar o servidor de produção:

```bash
npm start
```

## 📁 Estrutura do Projeto

```
avilaops/
├── src/
│   ├── components/
│   │   ├── Layout.tsx       # Layout principal
│   │   ├── Navbar.tsx       # Navegação
│   │   └── Footer.tsx       # Rodapé
│   ├── pages/
│   │   ├── index.tsx        # Home
│   │   ├── sobre-nos.tsx    # Sobre Nós
│   │   ├── servicos.tsx     # Serviços
│   │   ├── portfolio.tsx    # Portfólio
│   │   ├── ferramentas.tsx  # Ferramentas
│   │   ├── blog.tsx         # Blog
│   │   ├── contatos.tsx     # Contatos
│   │   ├── _app.tsx         # App wrapper
│   │   └── _document.tsx    # Document wrapper
│   └── styles/
│       └── globals.css      # Estilos globais
├── public/                  # Arquivos públicos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Personalização

### Cores

As cores principais podem ser alteradas no arquivo `tailwind.config.ts`. As cores primárias e secundárias já estão configuradas com uma paleta de azul e roxo.

### Conteúdo

Para alterar o conteúdo das páginas, edite os arquivos correspondentes na pasta `src/pages/`.

## 📱 Responsividade

O website é totalmente responsivo e otimizado para:
- Desktop
- Tablet
- Mobile

## 🔍 SEO

Cada página possui meta tags configuradas para otimização de SEO, incluindo:
- Títulos personalizados
- Descrições meta
- Open Graph tags (podem ser adicionados)

## 🌐 Deploy

O website está configurado para deploy automático com domínio customizado **avilaops.com**.

### Deploy com Vercel (Recomendado)

1. Faça login na [Vercel](https://vercel.com)
2. Importe o repositório do GitHub: https://github.com/avilainc/Landing-page
3. A Vercel detectará automaticamente as configurações do Next.js
4. Configure o domínio customizado:
   - Vá em Settings > Domains
   - Adicione `avilaops.com` e `www.avilaops.com`
   - Configure os registros DNS conforme as instruções da Vercel

### Configuração DNS

Configure os seguintes registros DNS no seu provedor de domínio:

**Para Vercel:**
- `A` record: `76.76.21.21`
- `CNAME` record para `www`: `cname.vercel-dns.com`

Ou siga as instruções específicas fornecidas pela Vercel ao adicionar o domínio.

### Deploy Manual

```bash
npm run build
npm start
```

## 📊 Repositório

- **GitHub:** https://github.com/avilainc/Landing-page
- **Website:** https://avilaops.com

## 📞 Suporte

Para dúvidas ou suporte:
- E-mail: atendimento@avilaops.com
- Telefone PT: (+351) 910 205 562
- Telefone BR: (+55) 17 99781 1471

---

Desenvolvido com ❤️ pela AvilaOps
