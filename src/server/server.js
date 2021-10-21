import express from "express";
import ReactDOM from "react-dom/server";
import { Header } from "../shared/Header";
import { indexTemplate } from "./indexTemplate";
const PORT = process.env.PORT || 3000;
const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(Header())));
});

app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
});
