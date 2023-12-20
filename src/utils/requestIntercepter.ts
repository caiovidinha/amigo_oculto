import { RequestHandler } from "express";
import router from "../routes/site";

export const requestIntercepter: RequestHandler = (req, res, next) => {
    console.log(`➡️ ${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`)
    next()
}

export default router