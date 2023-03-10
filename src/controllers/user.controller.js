import { User } from "../models/User.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";
const jwtKey = "my_secret_key"


export async function createUser(req, res){
  // Our register logic starts here
  try {
    // Get user input
    const { nama, email, telp, password } = req.body;
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({
      attributes: ["nama", "email", "telp", "password", "token", "id"],
      where: { email },
    });
    if (oldUser) {
      return res.status(300).send({message:'User sudah ada .... '});
    }

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      nama,
      telp,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      jwtKey,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
    const data = {
      'message' : 'Register berhasil',
      'status' : 'success'
    };  
    // return new user
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send({message:"gagal register",status:"error"});
  }
  // Our register logic ends here
}

export async function getUser(req, res) {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ 
      attributes: ["nama", "email", "telp", "password", "token", "id", "user_level"],
      where: { email }
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        jwtKey,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;
      const data ={
        'token' : token,
        'id'   : user.id,
        'user_level' : user.user_level,
        'message' : "success"
      }
      // user
      res.status(200).json({data});
    }
  } catch (err) {
    res.status(400).send({status:"gagal login",'status':"error"});
  }
  // Our register logic ends here
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

export async function getAllUser(req, res) {
  try {
    const user = await User.findAll({
      attributes: ["id","nama","email","telp","user_level"],
      order: [["id", "DESC"]],
    });
    res.json({
      data: user,
      status: 'success',
    });
  } catch (error) {
    return res.status(500).json({ status: 'data tidak ada' });
  }
}