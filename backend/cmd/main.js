import {Connect2DB, db} from "../database/db.js";
import {ServerConnection} from "./api/api.js";

function main() { 
    ServerConnection()
    Connect2DB(db)
}
main()