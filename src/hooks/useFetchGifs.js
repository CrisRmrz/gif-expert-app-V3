import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setiSLoading] = useState(true);

    const getImages = async() => {
        const images = await getGifs(category);
        setImages(images);
        setiSLoading(false)
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }


}