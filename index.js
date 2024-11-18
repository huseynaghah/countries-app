const wrapper = document.querySelector(".countries");

const getAll= async () =>{
    let request = await fetch("https://restcountries.com/v3.1/all");
    let data = await request.json();
    console.log(data);
    
    render(data)
}

const render =  (countries) =>{
   
    wrapper.innerHTML = countries.map(country => {
        return `
             <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card mb-3" style="width: 18rem;">
                    <img src="${country?.flags?.svg}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${country?.name?.common}</h5>
                        <p class="card-text"><b>Capital</b> : ${country?.capital}</p>
                        <a href="./details.html?name=${country?.name?.common}" class="btn btn-primary">Get more details >></a>
                    </div>
                </div>
            </div>
        `
    }).join("");
}  

document.addEventListener("DOMContentLoaded", getAll)