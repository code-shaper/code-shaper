import { createServer } from 'http';
import { createApp } from './createApp';

// -----------------------------------------------------------------------------
// Start the HTTP Server using the Express App
// -----------------------------------------------------------------------------
const port = process.env.port || 8080;
const app = createApp();
const server = createServer(app);
server.listen(port, () => console.log('Listening on port ' + port));

// -----------------------------------------------------------------------------
// When SIGINT is received (i.e. Ctrl-C is pressed), shutdown services
// -----------------------------------------------------------------------------
process.on('SIGINT', () => {
  console.log('SIGINT received ...');

  console.log('Shutting down the server');
  server.close(() => {
    console.log('Server stopped ...');
    console.log('Exiting process ...');
    process.exit(0);
  });
});
