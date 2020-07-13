## Overview
Application created to manage clients

## Technologies and Libraries
 - NodeJs;
 - ExpressJs;
 - Mongoose;
 - Babel;
 - Cors;
 - Faker;

## Initializing the application
To start the application, execute the following commands

 ```
    $ npm install  
 ```
  ```
    $ npm run migrate_db 
 ``` 
 ```
    $ npm start  
 ``` 

## Routes
Application routes

Find All Clients - `GET` (/clients);

Find Client By ID - `GET` (client/:{CPF});

Create Client - `POST` (/createClient);

Update Client - `PUT` (/updateClient/:{CPF});

Delete Client - `DELETE` (/deleteClient/:{CPF});
