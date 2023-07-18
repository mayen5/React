

const getImagen = async () => {

    try {
        const apiKey = 'csJ2602B0XQB8cQoUpedwAmk6nZyXdeR';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

        const {data} = await resp.json();

        const {url} = await data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        console.log(url);    
    } catch (error) {
        // manejo del error
        console.error(error);
    }

    
}

getImagen();