import app from './app';

const port = app.get('port') as number;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`http://localhost:${port}`);
});
