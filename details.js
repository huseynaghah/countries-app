const countryName = new URLSearchParams(window.location.search).get("name");
const flagWrap = document.querySelector(".flag");
const nameWrap = document.querySelector("#name");
const capitalWrap = document.querySelector("#capital");
const statusWrap = document.querySelector("#status");
const regionWrap = document.querySelector("#region");
const populationWrap = document.querySelector("#population")

const createCountry = async () =>{
    let response = await fetch('https://restcountries.com/v3.1/name/'+countryName);
    let data = await response.json();
    data = data[0];
    if (data) {
         flagWrap.innerHTML= `<img id="flag" src="${data?.flags?.svg}" class="card-img-top"  alt="...">`
         nameWrap.innerText = data.name.common;
         capitalWrap.innerHTML = `<b>Capital :</b> <p>${data?.capital}</p>`;
         statusWrap.innerHTML= `<b>Status : </b> <p>${data?.status}</p>`;
         regionWrap.innerHTML =`<b>Region : </b> <p>${data?.region}</p>`;
         populationWrap.innerHTML =`<b>Population : </b><p>${data?.population}</p>`;

    }
   

    
}

createCountry()