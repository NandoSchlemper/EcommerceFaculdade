import {Connect2DB, db} from "../database/db.js";
import {ServerConnection} from "./api/api.js";

<<<<<<< HEAD
async function main() { 
    await ServerConnection()
    await Connect2DB(db)
=======
function main() { 
    ServerConnection()
    Connect2DB(db)
>>>>>>> 2aaa1f3c2be92082f529daeb584ca320b3ed3a6f
}
await main()