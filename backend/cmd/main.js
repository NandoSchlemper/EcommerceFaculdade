import Connect2DB from "../database/db.js";
import {ServerConnection} from "./api/api.js";

function main() { 
    ServerConnection()
    Connect2DB()
}
main()