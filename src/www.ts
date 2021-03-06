import 'source-map-support/register';
import App from './App';
import express from 'express';

const port: number = Number(process.env.PORT) || 3000;
const app: express.Application = new App().app;

app.listen(port, ()=> console.log(`start ${port}`))
.on('error', err => console.error(err));