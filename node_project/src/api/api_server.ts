import app from "./api_config";

const port: number = 3001;

app.listen(port, 'localhost', function () {
    console.info(`Server running on : http://localhost:${port}`);
  }).on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('server startup error: address already in use');
    } else {
      console.log(err);
    }
  });