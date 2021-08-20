import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (setColorz) => {
    axiosWithAuth()
        .get('/colors')
        .then(res => setColorz(res.data))
        .catch(err => console.log(err))
}

export default fetchColorService;