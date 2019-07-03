module.exports =  {
    
    getAllUsers: (req, res) => {
        const db = req.app.get('db')
        
        db.get_all_users().then(users => res.status(200).send(users))
            .catch(err => res.status(500).send(console.log(err)));
        },
    
    getCurrentUser: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params;
    
        db.get_current_user(id).then(user => res.status(200).send(user))
            .catch(() => res.status(500).send(console.log(err)));
        },
    
    
    getUserById: (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;
        id = +id;
        
        db.get_user_by_id({id}).then(user => {
            res.status(200).send(user)
        })
            .catch(err => res.status(500).send(console.log(err)));
        },

    getUserByEvent: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        
        db.get_user_by_event({id}).then(event => res.status(200).send(event))
        .catch(err => res.status(500).send(console.log(err)));
    },

    addUser: (req, res) => {
        const db = req.app.get('db');

        const {
            username,
            firstName,
            lastName,
            age,
            location,
            gender,
            image,
            bio
        } = req.body
 
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
            res.status(200).send(user)
        })
        .catch(err => res.status(500).send(console.log(err)));

    },
    
    updateUser: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const user = db.get_user_by_id({id})

        const newUser = {...user, ...req.body}

        db.update_user({newUser, id})
            .then(() => res.status(200).send())
            .catch(err => {
                res.status(500).send()
            });
    }

}


