const baseURL = ("https://www.rijksmuseum.nl/api/en/collection");
const key = 'fpGQTuED';
const searchForm = document.querySelector('form');
const artList = document.querySelector('ul');
let site;

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e){
    e.preventDefault();

    site = `${baseURL}?q=${maker.value}&key=${key}&format=json`;
    console.log(site);

        fetch(site)
        .then(data=> data.json())
        .then (json=> {
            displayResults(json);
            console.log(json);
        });
        }

function displayResults(json){
 
  console.log(json.artObjects)
  let photo = json.artObjects;


//artObjects.title   artObjects.webImage.url  artObjects.principalOrFirstMaker
    for(let i = 0; i < photo.length; i++) { 
      let artItem = document.createElement('li');
      artItem.innerHTML += '<a href="'+photo[i].webImage.url+'">'+photo[i].title+'</a>';
      artList.appendChild(artItem); 
    }}