import express from 'express';
import urlMapRoutes from "../controllers/urlMapController"

const router = express.Router();

export default(): express.Router =>{
    urlMapRoutes(router);
    return router;
}