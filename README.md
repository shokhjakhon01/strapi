
# Strapi bookstore Rest api

A brief description of what this project does and how it works


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_NAME=`

`DATABASE_USERNAME=`

`DATABASE_PASSWORD=`

`DATABASE_PORT=5432`

`DATABASE_HOST=localhost`


## Enter your local database with this code or pgAdmin, bekeeper gui


```bash
 sudo -u postgres psql
```
    
## Create database in your local database

```javascript
CREATE DATABASE STRAPI;
```


## Deployment

To install all packages

```bash
  yarn install   
```
#or
```bash
  npm install   
```

Run the project in development mode
```bash
  yarn develop
```
#or
```bash
  yarn develop
```
### After running this application write this command for entering dummy data to your tables after entering this you must enter your database password


```bash
psql -h localhost -d strapiss -U postgres -f main.sql
```

## Retrieve a list of all books in the bookstore, Include author details for each book.
    
```bash
http://localhost:1337/api/books
```

## Retrieve a list of all authors in the bookstore,including 3 top books
    
```bash
http://localhost:1337/api/authors
```

## Retrieve a list of the top 10 books based on their ratings.

```bash
http://localhost:1337/api/books/topbooks
```

## Allow users to rate a specific book. POST METHOD

```bash
http://localhost:1337/api/books/:id/review
```

### for work truly give the permission all routes entering the admin panel of strapi. and one error is that entering all dummy data is a draft mode, i cant correct this  publish it for work
