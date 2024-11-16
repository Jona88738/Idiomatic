import { config } from "dotenv";
config()
export const PORT = 3001;
export const Host = 'http://localhost:' + PORT;

export const PAYPAL_ID_CLIENT = process.env.PAYPAL_ID_CLIENT;
export const PAYPAL_SECRET = process.env.PAYPAL_SECRET;
export const PAYPAL_API = 'https://api-m.sandbox.paypal.com';

export const HOST_BD = process.env.HOST_BD;
export const PORT_BD = process.env.PORT_BD;
export const USER_BD = process.env.USER_BD;
export const PASSWORD_BD = process.env.PASSWORD_BD;
export const DATABASE = process.env.DATABASE;

export const USER_GMAIL = process.env.USER_GMAIL;
export const USER_PASSWORD = process.env.USER_PASSWORD;

