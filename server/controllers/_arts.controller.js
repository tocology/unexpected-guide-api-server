import models from '../models';

class Arts {
    index (req, res) {
        const id = req.query.id;

        if (!id) {
            // get all arts
            models.Arts.findAll()
                .then(arts => res.json(arts));
        } else {
            // get arts by id
            models.Arts.find({
                where: {
                    id: id
                }
            }).then(arts => res.json(arts));
        }
    };

    // create arts
    create(req, res) {
        const name = req.body.name;
        const artistName = req.body.artistName;
        const createdDate = req.body.createDate;
        const description = req.body.description;

        models.Arts.create({
            name: name,
            artistName: artistName,
            createdDate: createdDate,
            description: description
        }).then((art) => res.status(201).json(art));
    };

    // get arts by artist name
    showByArtist (req, res) {
        const artistName = req.query.artistName;

        if (!artistName) {
            // get all arts
            models.Arts.findAll()
                .then(arts => res.json(arts));
        } else {
            // get arts by artist name
            models.Arts.find({
                where: {
                    artistName: artistName
                }
            }).then(arts => res.json(arts));
        }
    };

    // delete arts by id
    destroy (req, res) {
        const id = parseInt(req.params.id, 10);

        models.Arts.destroy({
            where: {
                id: id
            }
        }).then(() => res.status(204).send());
    };
}

export default new Arts();

