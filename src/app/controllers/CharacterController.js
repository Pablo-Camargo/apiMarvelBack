import apiMarvel from '../services/apiMarvel';

const timeStamp = '1610499334';
const apiKey = '639ff5fd87c6eb35ba17ecfb88ab0e5d';
const md5 = 'f7c7914626531d1022fe704f39507163';
class CharacterController {
    async index(req, res) {
        try {
            const { page } = req.params;
            const offset = (page - 1) * 100;
            const data = await apiMarvel.get(
                `/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100&offset=${offset}`
            );

            return res.json(data.data);
        } catch (error) {
            return res.status(error.status || 400).json(error);
        }
    }

    async show(req, res) {
        try {
            const { name } = req.params;
            const data = await apiMarvel.get(
                `/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&nameStartsWith=${name}`
            );
            console.log(data);
            return res.json(data.data);
        } catch (error) {
            return res.status(error.status || 400).json(error);
        }
    }
}
export default new CharacterController();
