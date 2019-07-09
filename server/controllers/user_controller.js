module.exports = {
  getAllUsers: (req, res) => {
    const db = req.app.get("db");

    db.get_all_users()
      .then(users => res.status(200).send(users))
      .catch(err => res.status(500).send(console.log(err)));
  },

  getCurrentUser: (req, res) => {
    const db = req.app.get("db");
    console.log(req.session);
  },

  getUserById: (req, res) => {
    const db = req.app.get("db");
    let { id } = req.params;
    id = +id;

    db.get_user_by_id({ id })
      .then(user => {
        res.status(200).send(user);
      })
      .catch(err => res.status(500).send(console.log(err)));
  },

  getUsersByEvent: async (req, res) => {
    const db = req.app.get("db");
    let { id } = req.params;
    id = +id
    const userObjArr = []
    const userIdArr = await db
      .get_users_by_event({ event_id: id })
      .catch(err => res.status(500).send(console.log(err)));

    for (let i = 0; i < userIdArr.length; i++) {
        const user = await db.get_user_by_id({id: userIdArr[i].user_id})
        userObjArr.push(user[0])
    }
    console.log('userObjArr', userObjArr)
    res.status(200).send(userObjArr)
  },

  addUser: (req, res) => {
    const db = req.app.get("db");

    const {
      username,
      firstName,
      lastName,
      age,
      location,
      gender,
      image,
      bio
    } = req.body;

    db.create_user({
      username,
      firstName,
      lastName,
      age,
      location,
      gender,
      image,
      bio
    })
      .then(user => {
        res.status(200).send(user);
      })
      .catch(err => res.status(500).send(console.log(err)));
  },

  updateUser: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const user = db.get_user_by_id({ id });

    const newUser = { ...user, ...req.body };

    db.update_user({ newUser, id })
      .then(() => res.status(200).send())
      .catch(err => {
        res.status(500).send();
      });
  }
};
