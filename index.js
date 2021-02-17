import Express from "express";
import Products from './products.js'

const app = Express();
const port = 3000;
app.use(Express.urlencoded({ extended: true }))


function mid(req, res, next) {
  console.log(req.body);
  console.log(req.params);
  next()
  
}

app.get("/products/:id", mid, (req, res) => {
  res.json(Products.find((product) => {
    return +req.params.id === product.id
  }))
  // res.send(req.params)
  // res.json(Products)
})

app.post("/add", (req, res) => {
  console.log(req.body.id);
  res.sendStatus(200)

}
)

app.listen(port, () => console.log("listening on port" + port))