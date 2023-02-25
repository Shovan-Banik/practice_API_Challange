const loadData=()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>displayData(data))
};
const displayData=(data)=>{
    const container=document.getElementById('container')
    data.forEach(newData=>{
        console.log(newData.languages[0].name);
        const ul=document.createElement('ul');
        ul.classList.add('dropdown-menu');
        ul.innerHTML=`
        <li><a class="dropdown-item" href="${newData.region}">Filter by Region</a></li>
        <li><a class="dropdown-item" href="${newData.capital}">Filter by capital city</a></li>
        <li><a class="dropdown-item" href="${newData.languages[0].name}">Filter by language</a></li>
        `
        container.appendChild(ul);
    })
}
loadData();
