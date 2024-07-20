"use server";

import db from "../db/db";

export const createUser = async () => {
  try {
    const newUser = await db.User.create({
      name: "Jinna Huang",
      email: "8S8pJ@example.com",
      age: 25,
    });
    console.log("New user created: ", newUser);
    return JSON.stringify(newUser);
  } catch (error) {
    console.error(error);
    return JSON.stringify(error);
  }
};
