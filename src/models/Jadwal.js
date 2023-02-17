import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Jadwal = sequelize.define(
  "jadwal",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tanggal:{
        type: DataTypes.DATE
    },
    waktu:{
        type: DataTypes.TIME
    },
  },
  {
    timestamps: true,
  }
);
