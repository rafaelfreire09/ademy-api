# Ademy API

Platform for purchasing courses and ebooks similar to Udemy

---

## 🛠️ Tecnologies:

- Typescript
- Node.js
- Nest
- MySQL
- Prisma
- Docker Compose
- PHPMyAdmin

---

## ⚙️ Installation:

With Docker and Docker Compose for MySQL and PHPMyAdmin:

1. To up MySQL and PHPMyAdmin: 

    ```sh
    docker-compose up
    ```

2. To install dependencies of project: 

    ```sh
    npm install
    ```

3. To run the server: 

    ```sh
    npm run dev
    ```

4. Open [localhost:5000](http://localhost:5000) on browser to test the API.

5. And you can access PHPMyAdmin through [localhost:8080](http://localhost:8080) with `root` as username and password.

## Notes

To run seeds for DB: 

```sh
npm run db:seed
```

To run or create a migration for DB: 

```sh
npm run db:migrate:dev
```