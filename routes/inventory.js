import express from "express"
import { getInventory, inputRation, addRation } from "../controllers/inventory.js"

const router = express.Router()

router.get("/", getInventory)

router.get("/add", inputRation)
router.post("/add", addRation)
// router.delete("/delete:id", deleteRation)

export default router