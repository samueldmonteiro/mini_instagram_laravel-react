FROM php:8.2-fpm

# Instalar dependências
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    nano \
    curl

# Instalar extensões PHP
RUN docker-php-ext-install pdo_mysql zip

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Definir o diretório de trabalho
WORKDIR /var/www/html

# Copiar o código da aplicação
COPY . .

# Copiar e instalar dependências do Composer
RUN composer install

# Passa o UID e GID como argumentos
ARG UID
ARG GID

# Cria o grupo e usuário com os IDs da máquina host
RUN groupadd -g ${GID} usergroup && \
    useradd -u ${UID} -g usergroup -m backend

# Adiciona o usuário ao grupo 'www-data'
RUN usermod -a -G www-data backend

# Ajusta permissões para o diretório onde o código foi copiado
RUN chown -R backend:www-data /var/www/html

# Ajusta permissões de escrita e execução para o grupo
RUN chmod -R 775 /var/www/html

# Expor a porta 8000
EXPOSE 8000

# Definir o usuário para rodar o container
USER backend

# Comando para iniciar o servidor
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
