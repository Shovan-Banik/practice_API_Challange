const loadAdvice=()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data=>displayAdvice(data))
}
const displayAdvice=value=>{
    const container=document.getElementById('container');
    // console.log(value)
    const div=document.createElement('div');
    div.innerText=value.slip.advice;
    container.appendChild(div);
}
const loadById=()=>{
    const number=document.getElementById('input-field').value;
    fetch(`https://api.adviceslip.com/advice/${number}`)
    .then(res=>res.json())
    .then(data=>displayById(data))
}
const displayById=(newData)=>{
    document.getElementById('input-field').value='';
    const container=document.getElementById('container');
    container.innerText='';
    console.log(newData.slip.advice);
    const div=document.createElement('div');
    div.innerText=newData.slip.advice;
    container.appendChild(div);
}



loadAdvice();