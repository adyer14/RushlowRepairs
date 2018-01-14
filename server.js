var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8000;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/index.html')
      break
    case '/index.html':
      sendFile(res, 'public/index.html')
      break
    case '/css/style.css':
      sendFile(res, 'public/css/style.css', 'text/css')
      break
    case '/js/scripts.js':
      sendFile(res, 'public/js/scripts.js')
      break
    case '/res/Flooring.jpg':
      sendFile(res, 'public/res/Flooring.jpg')
      break
    case '/res/flooring_2.jpg':
      sendFile(res, 'public/res/flooring_2.jpg')
      break
    case '/res/heat.jpg':
      sendFile(res, 'public/res/heat.jpg')
      break
    case '/res/Kitchen.jpg':
      sendFile(res, 'public/res/Kitchen.jpg')
      break
    case '/res/Plowing.jpg':
      sendFile(res, 'public/res/Plowing.jpg')
      break
    case '/res/plumbing.jpg':
      sendFile(res, 'public/res/plumbing.jpg')
      break
    case '/res/Railing_Finish.jpg':
      sendFile(res, 'public/res/Railing_Finish.jpg')
      break
    case '/res/Teamwork.jpg':
      sendFile(res, 'public/res/Teamwork.jpg')
      break
    case '/res/Brian_Logo.png':
      sendFile(res, 'public/res/Brian_Logo.png')
      break
    case '/README.md':
      sendFile(res, 'README.md')
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8000')

// subroutines

function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}
