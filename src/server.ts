import app from "./app"


app.get('/', (req, res) => {
  return res.json({message: "Hello, World!"})
})

app.listen(8080, () => console.log("Server started!"))