const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};

// const jsonPerson=JSON.stringify(person);
// const objectPerson=JSON.parse(jsonPerson);
const loadData = () => {
    const data = person.result;
    displayData(data, person.found)
}
const displayData = (data, newData) => {
    document.getElementById('message').innerText = newData;
    const container = document.getElementById('container');
    data.forEach(user => {
        // console.log(user);
        const div = document.createElement('div');
        div.classList.add('col', 'card', 'shadow-lg');
        div.innerHTML = `
                    <h5 class="card-header">Person Name: ${user.name.common}</h5>
                    <div class="card-body">
                        <h5 class="card-title">Age: ${user.age}</h5>
                        <p class="card-text">Street: ${user.address.street}</p>
                    </div>
            `
        container.appendChild(div);

    })
}
loadData();
