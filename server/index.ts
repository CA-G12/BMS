import app from './app';

const port:number = app.get("port");

app.listen(port, () => {
    console.log(`http://localhost:${ port }`);
});
