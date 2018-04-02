
'use strict';

// const API = {
//     endpoints: {
//         laureate: 'http://api.nobelprize.org/v1/laureate.json?',
//         prize: 'http://api.nobelprize.org/v1/prize.json?'
//     },
//     queries: [{
//         description: 'All female laureates',
//         endpoint: 'laureate',
//         queryString: 'gender=female'
//     }]
// };

const url ='https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

// Create select element
function  select(){
    const root = document.getElementById('root');
    const selectContainer = createAndAppend('div', root)
    const select = createAndAppend('select', selectContainer)
  
}


//create HTML tag and append it
function createAndAppend(tagName, parent) {
    const element = document.createElement(tagName);
    parent.appendChild(element);
    return element;
}

//cb(error, data)
function fetchJSON(url, callBack) {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status < 400) {
                callBack(null, xhr.response)
                
            } else {
                callBack(new Error(xhr.statusText));
            }
        }
    }
    xhr.send();
}

fetch(url, data)


select();