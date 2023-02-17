import { User } from "../models/User.js";

export async function createUser(req, res) {
  try {
    const { nama, email, telp, password} = req.body;
    const newUser = await User.create({
      nama,
      email,
      telp,
      password
    });
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUser(req, res) {
  try {
    const users = await User.findAll({
      attributes: ["id","nama","email","telp","createdAt","updatedAt"],
      order: [["id", "DESC"]],
    });
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateTask(req, res) {
  const { id } = req.params;
  // const { projectid, name, done } = req.body;
  try {
    // const updatedTask = await Task.update(
    //   { name, done, projectid },
    //   { where: { id } }
    // );

    const task = await Task.findOne({
      attributes: ["name", "projectId", "done", "id"],
      where: { id },
    });

    task.set(req.body);

    await task.save();

    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getTask(req, res) {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id },
      attributes: ["id", "projectId", "name", "done"],
    });
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
