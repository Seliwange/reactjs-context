import React, {useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState([null, false]);

    useEffect(() => {
        setState([null, true]);

        (async () => {
            const data = await fetch(url)
                .then(res => res.json());

            setState([data.body, false]);
        })();
    }, [url]);

    return state;
};
