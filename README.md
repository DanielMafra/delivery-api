# Delivery API - Registration of customer, product and delivery.

This project was developed during the NodeJS track, available on Rocketseat's Ignite.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [Routes](#routes)
- [Development process](#development-process)
  - [Built with](#built-with)
- [Coded by](#coded-by)
- [How to run the project](#how-to-run-the-project)

## Overview

### The project

Users should be able to:

- Register customer
- Register delivery person
- Register product for delivery
- Accept a delivery
- Finalize a delivery
- List deliveries

### Routes

##### Client routes:

- POST: /client - Create a client
- Body content: { "username": "CLIENT_USERNAME", "password": "CLIENT_PASSWORD" }
- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
- GET: /client/deliveries - List deliveries client
- Header content: BEARER TOKEN (received after client authenticating)

##### Deliveryman routes:

POST: /deliveryman - Create a deliveryman
Body content: { "username": "DELIVERYMAN_USERNAME", "password": "DELIVERYMAN_PASSWORD" }

GET: /deliveryman/deliveries - List deliveries deliveryman
Header content: BEARER TOKEN (received after deliveryman authenticating)

PUT: /delivery/updateDeliveryman/ID_PRODUCT - Accept delivery
Header content: BEARER TOKEN (received after deliveryman authenticating)

PUT: /delivery/updateDeliveryman/ID_PRODUCT - End delivery
Header content: BEARER TOKEN (received after deliveryman authenticating)

##### Deliveries routes:

POST: /delivery - Create delivery (using for client)
Body content: { "item_name": "PRODUCT NAME" }
Header content: BEARER TOKEN (received after client authenticating)

GET: /delivery/available - List deliveries available (using for deliveryman)
Header content: BEARER TOKEN (received after deliveryman authenticating)

##### Authenticate routes:

POST: /client/authenticate - Authenticate a client
Body content: { "username": "CLIENT_USERNAME", "password": "CLIENT_PASSWORD" }

POST: /deliveryman/authenticate - Authenticate a deliveryman
Body content: { "username": "DELIVERYMAN_USERNAME", "password": "DELIVERYMAN_PASSWORD" }

## Development process

### Built with

- Express
- BCrypt
- JSON Web Token
- Prisma
- Postgres
- NodeJS

## Coded by

- Website - [Daniel Mafra](https://danielmafra.github.io)
- LinkedIn - [@danielmafradev](https://linkedin.com/in/danielmafradev)
- Instagram - [@danielmafradev](https://instagram.com/danielmafradev)

## How to run the project

Clone the repository using "git clone". After that, go to the project folder and use the command "npm install" or "yarn install" to install the dependencies.

Make sure you are running Postgres and create a .env file with value: DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:PORT/DATABASE?schema=public" (replace username, password, port and database with your information).

Finally use the command "prisma migrate dev" and then "npm run dev" or "yarn dev" to start the project.
