import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

let API_KEY = 'WRIxqnlxjNL7d3AKMthBHmocORGRHO5u';

export const useGif = (text, empty) => {

    const [gif,setGIF] = useState('');

    const[loader,setLoader] = useState(false);

    let link = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    async function fetch(){

        setLoader(true);
        
        let {data} = await axios.get( (empty)  ? link : `${link}&tag=${text}`  ) ;

        let url = data.data.images.downsized_large.url;

        setLoader(false);
        setGIF(url);

    
    }

    useEffect( ()=>{

        fetch();

    },[])

    return {gif,fetch,loader}

}
