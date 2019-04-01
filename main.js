let index = 0;

function addImg(document, url) {
    const div = document.createElement('div');
    div.className = 'image-container';
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Cute doggo';
    img.id = 'img'+index++;
    div.appendChild(img);
    document.querySelector('.flex').appendChild(div);
}

function goFetch(document) {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(jsonResponse => addImg(document,jsonResponse.message));
}
    
    
    