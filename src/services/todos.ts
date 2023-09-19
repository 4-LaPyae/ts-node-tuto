import User from "../models/user";

export const getQueryUsers = async () => {
  return await User.find({});
};

export const createQueryUser = async (data: any) => {
  return await User.create(data);
};
export const updateQueryUser = async (id: string, data: any) => {
  return await User.findByIdAndUpdate({ _id: id }, data, { new: true });
};
export const deleteQueryUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};
