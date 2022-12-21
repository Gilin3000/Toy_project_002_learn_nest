import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const data = [1, 2, 3, 4];

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
    console.log(req.rawHeaders[1]);
    res.send({ som: Cat[1] });
  });

app.listen(8000, () => {
  console.log("server is on...");
});
