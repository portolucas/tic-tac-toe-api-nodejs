## Tic-tac-toe API in NodeJS

### NodeJS version: 6.9.0

Dependencies:
- "connect": "^3.7.0",
- "connect-ensure-login": "^0.1.1",
- "cookie-parser": "^1.4.4",
- "debug": "^2.6.9",
- "express": "^4.16.4",
- "express-session": "^1.17.0",
- "hbs": "^4.0.6",
- "http-errors": "~1.6.3",
- "morgan": "^1.9.1"

### Install node: ```npm i```

### Build: ```npm start```

### Routes: 
- Initial route: POST /game
- Movement route: POST /game/:id/movement 

### Postman collection
- Use the ``` tic-tac-toe.postman_collection.json ``` for tests on Postman.

If you are on Linux/Mac, change the **start** value on **script** key of **_package.json** file for ```"./bin/www"```
