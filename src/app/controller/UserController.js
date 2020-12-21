import passwordGenerator from 'password-generator';

import Queue from '../lib/Queue';

export default {
    async store(req, res){
        const {name, age, genre, email} = req.body;
        const user = {
            name,
            age,
            genre,
            email,
            password: passwordGenerator(10, false),
        }

        await Queue.add('RegistrationMail', { user });
        return res.json(user);
    }
}