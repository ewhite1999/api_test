# NODE BOOKS ADMIN

## CREATING AND TESTING AN API SERVER

**Setting up a collaborative dev environment**

1. Create a folder and ```$ git init``` 
2. ```$ touch .gitignore``` and edit to ignore "node_modules" and "package-lock.json"
2. ```$ npm init -y ```
3. ```$  npm i -D jest supertest```
4. ```$ npm i cors express nodemon```
4. edit package.json to contain
```
 "scripts": {
    "test": "jest --watchAll",
    "start": "node server.js",
    "dev": "nodemon index.js"
   },
```


**Organizing the content**

1. Create index.js
2. Create server.js
3. Create data.js









