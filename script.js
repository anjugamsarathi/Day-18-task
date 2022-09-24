// mock data Ex-1

const country = {
    flag: "https://flagcdn.com/sa.svg",
    name: "Saudi Arabia",
    Population: 23454672983,
    Region: "Asia",
    Capital: "Riyadh",
}

document.body.innerHTML = `<div class=" country_container">
<h1 class="country_name">${country.name}</h1>
<img class="country_img" src=${country.flag} alt="country_flag">
<p><span>Population:</span> ${country.Population}</p>
<p><span>Region:</span>${country.Region}</p>
<p><span>Capital:</span> ${country.Capital}</p>
<button type="button" class="country_button">Click For Weather</button>
</div>`

const countries = [{
        flag: "https://flagcdn.com/sa.svg",
        name: "Saudi Arabia",
        Population: 23454672983,
        Region: "Asia",
        Capital: "Riyadh",
    },
    {
        flag: "https://flagcdn.com/sa.svg",
        name: "us",
        Population: 23454672983,
        Region: "Asia",
        Capital: "Riyadh",
    },
    {
        flag: "https://flagcdn.com/sa.svg",
        name: "Germany",
        Population: 23454672983,
        Region: "Asia",
        Capital: "Riyadh",
    }
]

function createCountries(countries) {
    countries.forEach((country) => {
        document.body.innerHTML += `<div class=" country_container">
    <h1 class="country_name"> ${country.name.common}</h1>
    <img class="country_img" src= ${country.flags.png} alt="country_flag">
    <p><span>Population :</span> ${country.population}</p>
    <p><span>Region :</span> ${country.region}</p>
    <p><span>Capital :</span> ${country.capital}</p>
    <button type="button" class="country_button">Click for Weather</button>
    </div>`
    })
}
// createCountries();
fetch("https://restcountries.com/v3.1/all")
    .then((data) => data.json())
    .then((con) => createCountries(con))
    // .finally((countries) => console.log(countries))



var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET",
];

function result() {
    for (var val of friends2) {
        friends1.push(val)
    }
    var friends = [...friends1]
    console.log(friends.sort())

    function dataHandling(input) {
        console.log(input.sort())
    }

    dataHandling(friends);
}
result()