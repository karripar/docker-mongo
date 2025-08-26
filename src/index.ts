import app from './app';
import mongoConnect from './utils/db';

const port = process.env.PORT || 3000;

(async () => {
  try {
    await mongoConnect();
    app.listen(port, () => {
      console.log(`Listening: http://0.0.0.0:${port}`);
    });
  } catch (error) {
    console.log('Server error', (error as Error).message);
  }
})();

