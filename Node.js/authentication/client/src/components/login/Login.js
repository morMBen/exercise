import Input from '../input/Input'
import { useState } from 'react';

const Login = ({ setLoginBar }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const cancel = () => {
        setUserEmail('')
        setUserPassword('')
        setLoginBar(false)
    }

    return (
        <div>
            <h2>Please log in</h2>
            <p>Email</p>
            <Input
                type='text'
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