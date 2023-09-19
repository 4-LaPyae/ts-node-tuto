import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/todos";
const router = Router();
const baseUrl = "/user";
router.route(`${baseUrl}`).get(getUsers).post(createUser);
router.route(`${baseUrl}/:id`).patch(updateUser).delete(deleteUser);
export default router;
