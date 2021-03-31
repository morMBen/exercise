import axios from 'axios';
import React, { useState, useEffect } from 'react';
const CancelToken = axios.CancelToken;
let cancel;
// console.log(cancel());

const Api = () => {
    const [results, setResults] = useState(null);
    useEffect(() => {
        const request = async () => {
            try {
                const { data } = await axios.get('http://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: 'programin',
                    },
                    cancelToken: new CancelToken(function executor(c) {
                        // An executor function receives a cancel function as a parameter
                        cancel = c;
                    })
                })
                setResults(data.query.search[0].title);
                // console.log(data.query.search[0].title)
            } catch (e) {
                console.log(e)
            }
        }
        request()
        return () => {
            cancel();
        }
    }, [])


    return (

        <p>{results}</p>
    )
}

export default Api;