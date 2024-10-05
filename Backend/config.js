import { config } from "dotenv";
config()
export const PORT = 3001;
export const Host = 'http://localhost:' + PORT;

export const PAYPAL_ID_CLIENT = process.env.PAYPAL_ID_CLIENT;
export const PAYPAL_SECRET = process.env.PAYPAL_SECRET;
export const PAYPAL_API = 'https://api-m.sandbox.paypal.com'

