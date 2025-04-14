import app from "./app.js";
const port = process.env.PORT || 3000;
import { ConnectDB } from "./database/database.js";

ConnectDB();

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})