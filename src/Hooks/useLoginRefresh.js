import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { autoLoginConstant } from '../Constant'


export function useLoginRefresh() {
    
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_API_URL}/refreshToken`,
                    {
                        withCredentials: true,
                    }
                );

                console.log("RESPONSE",data);

                dispatch({
                    type:autoLoginConstant.AUTO_AUTH_SUCCESS,
                    payload:{user:data.user,isAuth:data.auth}
                });    

                setLoading(false);
            } catch (err) {
                console.log("error has come!",err);
                setLoading(false);
            }
        })();
    }, []);

    return { loading };
}
