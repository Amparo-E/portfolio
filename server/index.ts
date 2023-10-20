import { app } from "./src/app";

const port: number = 3001
 
// Server setup
app.listen(port, () => {
    console.log(`server is running in http://localhost:${port}/`);
});