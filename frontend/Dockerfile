# Usando a imagem do Node 22
FROM node:22

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo de configuração do package para instalar as dependências
COPY package.json yarn.lock ./


# Instala as dependências do projeto
RUN yarn install

# Copia os arquivos restantes para dentro do container
COPY . .

# Expõe a porta que o Vite utiliza (geralmente 5173)
EXPOSE 5173

# Comando para rodar o servidor de desenvolvimento do Vite
CMD ["yarn", "dev", "--host=0.0.0.0", "--port=5173"]
