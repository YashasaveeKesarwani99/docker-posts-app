## Docker Posts App

Backend for crud operations on "posts". Basically, one of my pracitce projects.

## Description

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)

🛠️A backend created using Node.js, Express, and MongoDB for seamless data management. I've encapsulated everything in Docker containers for easy deployment. Consists of CRUD APIs and data operations with simplicity and reliability.

## Installation

- for development
```bash
  docker-compose -f docker-compose.dev.yml -f docker-compose.dev.yml up -d --build

```
- for production
```bash
  docker-compose -f docker-compose.dev.yml -f docker-compose.prod.yml up -d --build

```
