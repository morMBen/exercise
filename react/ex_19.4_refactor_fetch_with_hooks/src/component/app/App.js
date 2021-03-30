import Avatar from './Avatar';
import AvatarData from './AvatarData';
import Input from './Input'
import { useEffect, useState } from 'react';
const App = () => {

    const [data, setData] = useState(null)
    const [dataCopy, setDataCopy] = useState(null)
    const [inputVal, setInputVal] = useState('')
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        const tempData = async () => {
            try {
                const temp = await AvatarData()
                setData(temp)
                setDataCopy(temp);
                // console.log(temp)
                setMessage('')
            } catch (err) {
                setMessage(`${err}`)
            }
        }
        tempData()
    }, [])
    const sortByFirstName = (str) => {
        console.log(data)
        const string = new RegExp(`^${str.toLowerCase()}`)
        return dataCopy.filter((e) => {
            return string.test(e.name.toLowerCase()) || string.test(e.last.toLowerCase())
        })
    }

    const onChange = (e) => {
        setInputVal(e.target.value)
        setData(sortByFirstName(e.target.value))
    }

    const setCards = () => {
        return data.map((e, i) => {
            return <Avatar
                first={e.name}
                last={e.last}
                title={e.title}
                img={e.imgUrl}
                key={i}
            />
        })
    }
    return (
        <div>
            <div className="ui divider"></div>
            <Input onChange={onChange} myVal={inputVal} />
            <h1>{message}</h1>
            <div className="ui divider"></div>
            <div className="ui grid">
                <div className="five column row">
                    {data && setCards()}
                </div>
            </div>
        </div>
    )

}
export default App;

