import Input from '../input/Input'
import { useState } from 'react';

const Login = ({ setSignBar }) => {
    const [userFirst, setUserFirst] = useState('');
    const [userLast, setUserLast] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const cancel = () => {
        setUserFirst('')
        setUserLast('')
        setUserPhone('')
        setUserEmail('')
        setUserPassword('')

        setSignBar(false)
    }

    return (
        <div>
            <h2>Please enter your details</h2>
            <p>First name</p>
            <Input
                type='text'
                value={userFirst}
                setValue={setUserFirst}
            />
            <p>Last name</p>
            <Input
                type='text'
                value={userLast}
                setValue={setUserLast}
            />
            <p>Phone number</p>
            <Input
                type='phone'
                value={userPhone}
                setValue={setUserPhone}
            />
            <p>Email</p>
            <Input
                type='email'
                value={userEmail}
                setValue={setUserEmail}
            />
            <p>Password</p>
            <Input
                type='text'
                value={userPassword}
                setValue={setUserPassword}
            />
            <div>
                <button onClick={cancel}>Cancel</button>
                <button>Ok</button>
            </div>
        </div>
    )
}

export default Login;