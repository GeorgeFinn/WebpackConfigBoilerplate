require("webpack-hot-middleware/client?reload=true")
require('./main.css')
require('./index.html')
require('./app.js')

var a = async () => {
  await console.log('hello from the future')
  console.log('done')
}
