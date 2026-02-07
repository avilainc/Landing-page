# 🚀 Guia de Deploy - AvilaOps Website

## Opções de Deploy

### 1. Deploy com Vercel (Recomendado) ⭐

A Vercel é a plataforma ideal para Next.js, oferecendo deploy automático e fácil configuração.

#### Passo a Passo:

1. **Conectar ao GitHub:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "Add New Project"
   - Selecione o repositório: `avilainc/Landing-page`

2. **Configuração do Projeto:**
   - Framework Preset: Next.js (detectado automaticamente)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Deploy:**
   - Clique em "Deploy"
   - Aguarde a build ser concluída (2-3 minutos)
   - Seu site estará disponível em: `https://[seu-projeto].vercel.app`

4. **Configurar Domínio Customizado:**
   - Vá em "Settings" > "Domains"
   - Adicione: `avilaops.com`
   - Adicione também: `www.avilaops.com`
   - Siga as instruções para configurar o DNS

### 2. Configuração DNS para avilaops.com

Configure os seguintes registros no seu provedor de DNS:

#### Para Vercel:
```
Tipo    Nome    Valor
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

#### Tempo de Propagação:
- Pode levar de 24 a 48 horas para o DNS propagar completamente
- Use [dnschecker.org](https://dnschecker.org) para verificar o status

### 3. Deploy com Netlify (Alternativa)

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Add new site" > "Import an existing project"
3. Conecte ao GitHub e selecione o repositório
4. Configurações:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Para domínio customizado:
   - Domain settings > Add custom domain
   - Configure os registros DNS conforme instruções

### 4. Deploy Manual (VPS/Servidor Próprio)

```bash
# 1. Clone o repositório
git clone https://github.com/avilainc/Landing-page.git
cd Landing-page

# 2. Instale as dependências
npm install

# 3. Build para produção
npm run build

# 4. Inicie o servidor
npm start
# Ou use PM2 para manter rodando:
pm2 start npm --name "avilaops" -- start
```

#### Configurar Nginx (se usar VPS):

```nginx
server {
    listen 80;
    server_name avilaops.com www.avilaops.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Depois configure SSL com certbot:
```bash
sudo certbot --nginx -d avilaops.com -d www.avilaops.com
```

## 🔄 Deploy Automático

Com GitHub Actions, você pode configurar deploy automático:

1. Todo push na branch `main` faz deploy automático
2. Pull requests criam preview deployments
3. Rollback fácil para versões anteriores

## ✅ Checklist Pós-Deploy

- [ ] Verificar se o site está acessível
- [ ] Testar todas as páginas
- [ ] Verificar responsividade (mobile, tablet, desktop)
- [ ] Testar formulário de contato
- [ ] Verificar links das redes sociais
- [ ] Configurar Google Analytics (se necessário)
- [ ] Adicionar Google Search Console
- [ ] Testar velocidade do site (PageSpeed Insights)
- [ ] Verificar meta tags para SEO
- [ ] Testar compartilhamento em redes sociais

## 🔐 Variáveis de Ambiente

Se precisar configurar variáveis de ambiente, crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://avilaops.com
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

## 📈 Monitoramento

- Use Vercel Analytics para monitorar performance
- Configure alertas para downtime
- Monitore Core Web Vitals

## 🆘 Troubleshooting

### Site não carrega:
1. Verifique se o build foi bem-sucedido
2. Confira os logs de deploy
3. Verifique a configuração DNS

### Domínio não funciona:
1. Aguarde 24-48h para propagação DNS
2. Verifique os registros DNS estão corretos
3. Limpe o cache do navegador

### Erros 404:
1. Verifique se todas as páginas estão no diretório correto
2. Confirme que o build incluiu todas as páginas

## 📞 Suporte

Para ajuda com deploy:
- Email: atendimento@avilaops.com
- Telefone PT: (+351) 910 205 562
- Telefone BR: (+55) 17 99781 1471
