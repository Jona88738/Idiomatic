import { createPool } from "mysql2/promise";
import { HOST_BD, PORT_BD, USER_BD, PASSWORD_BD, DATABASE } from '../config.js'

export const conn = createPool({

    host:HOST_BD,
    port:PORT_BD,
    database:DATABASE,
    user:USER_BD,
    password:PASSWORD_BD
})