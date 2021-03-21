import axios from 'axios';

// const setData = async () => {

// }
const AvatarData = async () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
        const response = await axios.get('https://randomuser.me/api/');
        const data2 = await response.data.results;
        // debugger;
        data.push({
            name: data2[0].name.first,
            last: data2[0].name.last,
            title: data2[0].name.title,
            imgUrl: data2[0].picture.large
        })
        // console.log(data)
    }
    return data;
}


export default AvatarData;