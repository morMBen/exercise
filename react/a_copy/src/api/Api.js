import axios from 'axios';

const Api = async () => {

    const results = await (await axios.get('https://605b218e27f0050017c063ab.mockapi.io/pics')).data;
    // console.log(results)
    return results

}

export default Api;