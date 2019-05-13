const baseURL = ("https://www.rijksmuseum.nl/api/en/collection");
const key = 'fpGQTuED';
const searchForm = document.querySelector('form');
const artList = document.querySelector('ul');
let url;

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e){
    e.preventDefault();

    url = `${baseURL}?q=${maker.value}&key=${key}&format=json`;
    console.log(url);

        fetch(url)
        .then(data=> data.json())
        .then (data=> {
            displayResults(data.names);
            console.log(data.names);
        });
        }

function displayResults(json){
 
  console.log(json); //Brie had [0] after json?

//artObjects.title   artObjects.webImage.url  artObjects.principalOrFirstMaker
    for(i = 0; i < json.length; i++) { //this is wrong. it doesnt know what json is.
        let art = json[i].art; //it also seems to not like this [i].
let artItem = document.createElement('li');
artItem.innerText = art;
            artList.appendChild(artItem); 
          }}

