import { NextApiRequest, NextApiResponse } from "next";
import Users from "../models/user";

//http://localhost:3000/api/users
export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await Users.find({});
    console.log(users)
    if (!users) return res.status(404).json({ error: "User not found" });
    res.status(200).json(users);
  } catch (error) {
    console.error('Error while fetching users:', error);
    res.status(500).json({ error: "Internal server error" });
  }
}

//http://localhost:3000/api/users/:id
export async function getUserById(userId:string, res: NextApiResponse) {
  try {
    const user = await Users.findOne({ email: userId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error fetching user" });
  }
}

export async function deleteUserById(userId: string, res: NextApiResponse) {
  try {
    const result = await Users.deleteOne({ email: userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error deleting user" });
  }
}



