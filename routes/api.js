import { Router } from "express";
import hello_world_controller from '../src/controllers/hello_world_controller.js'

const api = () => {

    const router = Router();

    router.get('/app', hello_world_controller.index);

    return router;
};

export default api;