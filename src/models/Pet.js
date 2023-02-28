import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Pet = sequelize.define(
  "pets",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user:{
        type: DataTypes.INTEGER,
    },
    nama_pet:{
        type: DataTypes.STRING
    },
    jenis_kelamin:{
        type: DataTypes.STRING
    },
    tgl_lahir:{
      type: DataTypes.DATE
    },
    berat:{
        type: DataTypes.INTEGER   
    },
    spesies:{
        type: DataTypes.STRING
    },
    ras:{
        type: DataTypes.STRING
    },
    warna:{
        type: DataTypes.STRING
    },
    vaksin:{
        type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
  }
);
