# Restaurant Menu
> ## Table of contents
- [Technology used](#technologies-used)
- [Getting Started](#getting-started)
    - [prerequisite](#prerequisite)
    - [installation](#installation)
- [References](#references)

___

> ## Technologies used

- DataBase
    - MongoDB
- backend
    - ExpressJS and Node.js
- Frontend
    - React JS
    - React-Bootstrap
____

>## Getting Started

-  ### Prerequisite 
    - MongoDBCompass
    - Node JS v-14 or newer
-  ### Configuration
    1. Create .env file like .env.sample file in backend folder
    2. In .env file you'll create the following variables:
        - PORT = 3001
        - DB_CONNECT = mongodb://localhost:27017/"Your-DB-name"
        - TOKEN_SECRET = "random-string"
-  ### Installation
    1. Navigate To the Directory you want to download in and Clone
    ```
    git clone https://github.com/Mohammad-Mancy/Rest-Menu.git
    ```
    2. Run the following command in the "backend"  folder to install NPM packages for the server:
    ```
    npm install
    ```
    3. Navigate into the "frontend" folder, to install NPM packages:
    ```
    npm install
    ```
    4. Navigate to the "backend" folder then run the following command to seed the database
    ```
    node seeder/seed
    node seeder/CategorySeeder
    node seeder/itemSeeder
    ```
    5. Then run the server
    ```
     npm start
     ```
    6. To run the app, navigate to the "frontend" folder then run:
    ```
    npm start
    ```
___

>## References
- [LinkedIn](https://www.linkedin.com/in/mohammad-mancy-75b591227/)
