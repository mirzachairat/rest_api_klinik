import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Jadwal = sequelize.define(
  "jadwals",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
   id_user :{
      type : DataTypes.INTEGER
   },
    tanggal:{
        type: DataTypes.DATE
    },
    waktu:{
        type: DataTypes.TIME
    },
    antrian:{
      type: DataTypes.INTEGER
    },
    nama_pet:{
      type: DataTypes.STRING
    },
    kondisi_pet:{
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
  }
);
