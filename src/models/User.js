import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Jadwal } from "./Jadwal.js";

export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    telp:{
        type: DataTypes.INTEGER,
    },
    password:{
        type: DataTypes.STRING,
    }
  },
  {
    timestamps: true,
  }
);

User.hasMany(Jadwal, {
    foreinkey: "userId",
    sourceKey: "id",
  });
Jadwal.belongsTo(User, { foreinkey: "userId", targetId: "id" });