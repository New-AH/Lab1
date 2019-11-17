// ./handles.js
// Necessary imports
module.exports = {
    serverHandle: function (req, res) {const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
        console.log(params)
      
        res.writeHead(200, {'Content-Type': 'text/plain'});
      
        if (path === '/hello' && 'name' in params) 
        {
           if(path === '/hello' && params['name'] === 'Thomas'){
              res.write('Hello, I am '+ params['name']+', I am 22 years old and I am studing ingeneering')
          }else {
              console.log("No request handler found for " + path);
              res.writeHead(404, {"Content-Type": "text/plain"});
              res.write("404 Not found");
              res.end();
          }
        }else {
            res.write('In order to display your name you need to write the path /hello? + your name and lets see if youre welcome')
        } 
      
        res.end();} 
  }