var fs = require('fs')
fs.readdir('/news', function (err, news) {
  if (err) {
    return console.error(err)
  }
  var newsList = []
  news.forEach(function (news) {
    console.log("Found " + news)
  })
})
