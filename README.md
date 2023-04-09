# ghostapi-post
This is a Node.js project that uses the Ghost API to create a random post with a random image as featiured image.

## requirements

Node.js v16 or higher  
Ghost Admin API Key  
Ghost Content API Key  
Ghost API URL  

## installation  

Clone this repository:  
```
git clone https://github.com/yourusername/ghost-random-post-express.git
```  
Install the dependencies:  
```
npm install
```  
Create a .env file in the root directory of the project with the following content:  
```
GHOST_ADMIN_API_KEY=your_admin_api_key
GHOST_CONTENT_API_KEY=your_content_api_key
GHOST_API_URL=your_ghost_api_url
```  
Start the server:  
```
npm start
```  
## usage  
Send a `__POST__` request to `__http://localhost:3000/createRandomPost__` to create a new random post. The response will contain the created post as JSON.
