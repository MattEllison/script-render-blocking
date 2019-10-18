const express = require("express");
const app = new express();

app.get("/render-block.js", function(request, response) {
  //response.send("console.log('first')");
  setTimeout(() => {
    response.send(
      "document.querySelector('h1').after('first js file finished')"
    );
  }, 5000);
});

app.get("/second.js", function(request, response) {
  setTimeout(() => {
    response.send(
      "document.querySelector('h1').after('first js file finished')"
    );
  }, 5000);
});

const port = 8080;
app.use(express.static("src"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
