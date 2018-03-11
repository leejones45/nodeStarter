import app from "./app";

const port = process.env.PORT;

 app.listen(port, ()  => {
  // tslint:disable-next-line
  console.log("Express Dev server listening on port " + port);
});
