const loadData = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayData(data))
};
const displayData = (data) => {
    const allCountryContainer = document.getElementById('all-country-container');
    data.forEach(newData => {
        //    console.log(newData);
        const div = document.createElement('div');
        div.classList.add('col', 'border', 'border-danger','p-3');
        div.innerHTML = `
       <h3>country: ${ newData.name}</h3>
       <h4>capital: ${ newData.capital}</h4>
       <h4>language: ${ newData.languages[0].name}</h4>

       <img src='${newData.flags.png}'>
       `
        allCountryContainer.appendChild(div);
    })
}
const loadFilterByLanguage = (language) => {
    inputSearch = document.getElementById('input-search').value;
    // console.log(inputSearch);
    url = `https://restcountries.com/v3.1/lang/${inputSearch}`
         fetch(url)
        .then(res => res.json())
        .then(data => displayFilterByLanguage(data))
}
const displayFilterByLanguage = (languages => {
    const allCountryContainer = document.getElementById('all-country-container');
    allCountryContainer.innerHTML = '';
    languages.forEach(newData => {
        // console.log(newData);
        const div = document.createElement('div');
        div.classList.add('col', 'border', 'border-danger');
        div.innerHTML = `
        <h3>country: ${ newData.name.common}</h3>
       <h4>capital: ${ newData.capital}</h4>
        <img src='${newData.flags.png}'>
   `
        allCountryContainer.appendChild(div);
    })
    // console.log(languages);
})
const loadFilterByCapital=()=>{
    const inputSearchCapital=document.getElementById('input-search-capital').value;
    const url=`https://restcountries.com/v3.1/capital/${inputSearchCapital}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayByCapital(data))
}
const displayByCapital=(data)=>{
    
    const allCountryContainer = document.getElementById('all-country-container');
    allCountryContainer.innerHTML='';
    data.forEach( newData=> {
        // console.log(newData);
        const div = document.createElement('div');
        div.classList.add('col', 'border', 'border-danger');
        div.innerHTML = `
       <h3>name: ${ newData.name.common}</h3>
       <h4>capital: ${ newData.capital}</h4>
       <img src='${newData.flags.png}'>
       `
        allCountryContainer.appendChild(div);
    })
}

const loadCountry=(value)=>{
    url=`https://restcountries.com/v3.1/region/${value}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayRegionalCountry(data))
}
const displayRegionalCountry=(countries)=>{
    const allCountryContainer = document.getElementById('all-country-container');
    allCountryContainer.innerHTML = '';
    countries.forEach(country => {
        //    console.log(country);
        const div = document.createElement('div');
        div.classList.add('col', 'border', 'border-danger');
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <h4>capital: ${ country.capital}</h4>
        <img src='${country.flags.png}'>
   `
        allCountryContainer.appendChild(div);
    })
}
const loadRegion= value =>{
    // let value=document.getElementsByClassName('region');
    // console.log(value);
    loadCountry(value);
}





loadData();
