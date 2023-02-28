import { Jadwal } from "../models/Jadwal.js";



export async function createJadwal(req, res) {
  const { id_user, tanggal, waktu, antrian, nama_pet, kondisi_pet} = req.body;
  try {
    let newJadwal = await Jadwal.create(
      {
        id_user,
        tanggal,
        waktu,
        antrian,
        nama_pet,
        kondisi_pet
      }
    );
    return res.json(newJadwal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getJadwalAll(req, res) {
  try {
    const data = await Jadwal.findAll({
      atributes: ["id", "id_user","tanggal", "waktu", "antrian", "nama_pet","kondisi_pet"],
    });
    const jadwal = {data}
    if(!jadwal){
      res.status(300).json({
        'message' : "data tidak ada"
      });
    }
    return res.json(jadwal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getJadwal(req, res) {
  const { id_user } = req.params;
  console.log(id_user);
  try {
    const jadwal = await Jadwal.findOne({
      where: {
        id_user,
      },
      atributes: ["id", "id_user", "tanggal", "waktu", "antrian", "nama_pet","kondisi_pet"]
    });
    if(jadwal){
      return res.json(jadwal);
    }
    res.status(300).json({
      'message' : "data tidak ada"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateJadwal = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteJadwal(req, res) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        projectId: id,
      },
    });
    await Project.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getJadwalTasks(req, res) {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "projectId", "name", "done"],
      where: { projectId: id },
    });
    res.json(tasks);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
