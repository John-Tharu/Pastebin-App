import { Router } from "express";
import { homepage, pastebin, pastedMsg } from "../controller/controller.js";

const router = Router();

router.get('/', homepage);

router.post('/pastebin', pastebin);

router.get('/data/:text', pastedMsg);

export const routerdata = router;