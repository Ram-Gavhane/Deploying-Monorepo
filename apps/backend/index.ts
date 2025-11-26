import express from "express";
import { client } from "db/client";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  client.user.findMany()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
})

app.post("/user", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return
  }

  client.user.create({
    data: {
      email,
      password
    }
  })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
})

app.post("/todo",(req, res)=>{
    
})

app.listen(3002);