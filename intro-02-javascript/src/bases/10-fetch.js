const apiKey='7QVmswsQ8UeTRnsCHoz9eXR3wJMNdBgR';

const llamado=fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

llamado
.then(resp=>resp.json())
.then(({data})=>{
    //console.log(data.images.original.url)
    const {url}=data.images.original;
    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);


})
.catch(console.warn);