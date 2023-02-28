import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Jadwal } from "./Jadwal.js"

export const Task = sequelize.define(
  "task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user:{
      type: DataTypes.INTEGER,
    },
    diagnosa: {
      type: DataTypes.STRING,
    },
    kesimpulan: {
      type: DataTypes.STRING,
    },
    saran: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Task.hasMany(Jadwal, {
  foreinkey: "taskId",
  sourceKey: "id",
});
Permohonan.belongsTo(Task, { foreinkey: "taskId", targetId: "id" });