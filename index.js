const app = require('express')()

app.get('/person', (req,res) => {
  res.send({
    persons: [
      {name: 'Charlie Brown', age: 8},
      {name: 'Snoopy', age: 6}
    ]
  })
})

app.listen(3000, () => {
  console.log("  App is running at port 3000")
  console.log("  Press CTRL-C to stop\n");
})