

    export const getGifs = async ( category ) => {
        // const apiKey = 'Mz5MICvq5WdISqFHjsXgSENkX5yoXsZN';
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=Mz5MICvq5WdISqFHjsXgSENkX5yoXsZN`;

        const resp = await fetch(url);
        // resp.ok?
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;

    }