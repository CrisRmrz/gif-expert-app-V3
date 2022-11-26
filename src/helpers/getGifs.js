export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=QikTtps5HCGXQFK8OXIhUZ44ajSnVocD&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({ // Mutamos la data para extraer solo lo que ocupamos del endpoint
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))


    console.log( gifs )

    return gifs; //(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] retorna un array con la data

}
