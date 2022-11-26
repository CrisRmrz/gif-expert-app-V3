import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { IsLoading } from "./IsLoading";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>

            <h3> {category} </h3>
            <p>Hola mundo</p>

            {
                (isLoading)
                    ?
                    <IsLoading />
                    :
                    <div className="card-grid">
                        {
                            images.map(({ id, title, url }) => {
                                return (<GifItem key={id} title={title} url={url} />)
                            })
                        }
                    </div>
            }

        </>
    )
}
