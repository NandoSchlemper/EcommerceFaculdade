import {Connect2DB} from "../database/db.js";
import {ServerConnection} from "./api/api.js";

async function main() { 
    await ServerConnection()
    await Connect2DB()
}
await main()