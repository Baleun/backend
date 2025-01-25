const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./output_ daily_1st.json"));

var cors = require("cors"); // cors 미들웨어 
app.use(cors()); // 모든 도메인에서 제한 없이 해당 서버에 요청을 보내고 응답을 받을 수 있다

app.get("/", (req, res) => {
    res.json(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});