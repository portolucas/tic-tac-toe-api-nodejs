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
- Movement route: POST /game/:id/movement send into the body this json: ```{
	"id": "id returned in route /game",
	"player": "O" or "X",
	"position": {
		"x": 0,
		"y": 1 
	}
}```

### Important:
    Don't exist "/" route and method GET on initial route don't works. Don't try GET at http://localhost:3000 in navigator, it's don't works.

If you are on Linux/Mac, change the **start** value on **script** key of **_package.json** file for ```"./bin/www"```

Listen on port:3000/game
