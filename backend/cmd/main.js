import {Connect2DB, db} from "../database/db.js";
import {ServerConnection} from "./api/api.js";

async function main() { 
    await ServerConnection()
    await Connect2DB(db)
}
await main()