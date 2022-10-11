import app from './app';
import dotenv from 'dotenv';

const port = app.get("port");

app.listen(port, () => {
    console.log(`http//localhost:${ port }`);
});
