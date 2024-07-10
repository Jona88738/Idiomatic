import { createPool } from "mysql2/promise";


export const conn = createPool({

    host:"localhost",
    port:"3306",
    database:"idiomatic",
    user:"root",
    password:""
})