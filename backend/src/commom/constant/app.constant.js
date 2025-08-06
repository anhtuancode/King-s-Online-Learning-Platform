import "dotenv/config"

export const DATABASE_URL = process.env.DATABASE_URL;
export const ACCESS_TOKEN_SECRET = "ACCESS_TOKEN_SECRET";
export const PORT = process.env.PORT;


console.log({
    DATABASE_URL,
    ACCESS_TOKEN_SECRET,
    PORT
})