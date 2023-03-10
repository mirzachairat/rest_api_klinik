import { Jadwal } from "../models/Jadwal.js";



export async function createJadwal(req, res) {
  const { id_user, tanggal, waktu, antrian, nama_pet, kondisi_pet} = req.body;
  try {
    const newJadwal = await Jadwal.create(
      {
        id_user,
        tanggal,
        waktu,
        antrian,
        nama_pet,
        kondisi_pet
      }
    );
    return res.json({
      status : 'success',
      data : newJadwal
  });
  } catch (error) {
    res.status(500).json({
      status: "data gagal di simpan",
    });
  }
}

export async function getJadwalAll(req, res) {
  try {
    const data = await Jadwal.findAll({
      atributes: ["id", "id_user","tanggal", "waktu", "antrian", "nama_pet","kondisi_pet"],
    });
    return res.json({
      status :'success',
      data : data
    });
  } catch (error) {
    res.status(500).json({
      status: 'Data tidak ada',
    });
  }
}

export async function getJadwal(req, res) {
  const { id_user } = req.params;
  console.log(JSON.stringify(id_user));
  try {
    const jadwal = await Jadwal.findOne({
      where: {id_user},
    });
      return res.json();
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
