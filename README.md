# PROYECTO NOC
El objetivo es crear una serie de tareas usando Arquitectura Limpia con TypeScript

# dev
1. Clonar el archivo env.template a .env
2. Configurar las variables de entorno
``````
PORT=3000

MAILER_EMAIL=
MAILER_SECRET_KEY=
MAILER_SERVICE=
MAILER_SEND_EMAIL=

PROD=false

MONGO_URL=
MONGO_DB_NAME=
MONGO_USER=
MONGO_PASS=

POSTGRES_URL=
POSTGRES_USER=
POSTGRES_PASS=
POSTGRES_DB=
``````

3. Ejecutar el comando ````npm install````
4. Levantar las bases de datos con el comando
````
docker compose up -d
npx prisma generate
npx prisma migrate dev
````
5. Ejecutar ````npm run dev````