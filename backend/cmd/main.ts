import { Connect2DB } from "../database/db.js";
import {ServerConnection} from "./api/api.js";

async function main() { 
    await ServerConnection()
    await Connect2DB().catch((err) => console.error(err.message))
}
main()