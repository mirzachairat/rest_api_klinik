import { Jadwal } from "../models/Jadwal.js";
import { Pet } from "../models/Pet.js";

export async function createPet(req, res) {
  const { id_user, nama_pet, jenis_kelamin,tgl_lahir,berat,spesies,ras,warna,vaksin} = req.body;
  try {
    let newPet = await Pet.create({
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
    return res.json(newPet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getPets(req, res) {
  try {
    const pet = await Pet.findAll({
      atributes: ["id_user", "nama_pet", "jenis_kelamin","tgl_lahir","berat","spesies","ras","warna","vaksin"]
    });
    res.json(pet);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}

