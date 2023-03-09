import { Jadwal } from "../models/Jadwal.js";
import { Pet } from "../models/Pet.js";

export async function createPet(req, res) {
  const { id_user, nama_pet, jenis_kelamin,tgl_lahir,berat,spesies,ras,warna,vaksin} = req.body;
  try {
    const newPet = await Pet.create({
      id_user,
      nama_pet,
      jenis_kelamin,
      tgl_lahir,
      berat,
      spesies,
      ras,
      warna,
      vaksin
    });
    return res.json({
      status : "success",
      data : newPet
    });
  } catch (error) {
    return res.status(500).json({ status: 'gagal menyimpan' });
  }
}

export async function getPets(req, res) {
  try {
    const pet = await Pet.findAll({
      atributes: ["id_user", "nama_pet", "jenis_kelamin","tgl_lahir","berat","spesies","ras","warna","vaksin"]
    });
    res.json({
      status : "success",
      data : pet
    });
  } catch (error) {
    res.status(500).json({status:'data tidak tersedia'});
  }
}

export async function getPet(req, res) {
  const {id_user} = req.params
  try {
    const pet = await Pet.findOne({
      where :{id_user}
    });
    res.json({
      status : "success",
      data : pet
    });
  } catch (error) {
    res.status(500).json({status:'data tidak tersedia'});
  }
}

