import { Request, RequestHandler, Response } from "express";
import {
  createQueryUser,
  deleteQueryUser,
  getQueryUsers,
  updateQueryUser,
} from "../services/todos";

export const getUsers: RequestHandler = async (req: Request, res: Response) => {
  const userLists = await getQueryUsers();
  return res.status(200).json({
    error: false,
    message: "User lists",
    data: userLists,
  });
};

export const createUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const user = await createQueryUser(req.body);
  return res.status(200).json({
    error: false,
    message: "User created successfully",
    data: user,
  });
};

export const updateUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const updateUser = await updateQueryUser(req.params.id, req.body);
  return res.status(200).json({
    error: false,
    message: "User updated successfully",
    data: updateUser,
  });
};
export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  await deleteQueryUser(req.params.id);
  return res.status(200).json({
    error: false,
    message: "User deleted successfully",
  });
};
