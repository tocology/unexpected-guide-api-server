import models from '../models';

class Users {
    index (req, res) {
        models.Users.findAll()
            .then(users => res.json(users));
    }

    create (req, res) {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;

        models.Users.create({
            username: username,
            password: password,
            email: email
        }).then((user) => res.status(201).json(user));
    }

    show (req, res) {
        const username = req.params.username;

        models.Users.findOne({
            where: {
                username: username
            }
        }).then(user => {
            if (!user) {
                return res.status(404).json({ error: 'No User' });
            }

            return res.json(user);
        });
    }
}

export default new Users();