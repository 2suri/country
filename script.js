const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
const im = document.getElementById('im');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');

btn.addEventListener('click' , () => {
 
    const inpval = inp.value.toLocaleLowerCase();
    
    fetch(`http://restcountries.eu/rest/v2/name/${inpval}`)
    .then((data) => {
       return data.json();
    })
    .then((actualdata) => {
//        console.log(actualdata[0].name);
                   const name = actualdata[0].name;
//        console.log(actualdata[0].capital);
                   const capital = actualdata[0].capital;
//        console.log(actualdata[0].subregion);
                   const subregion = actualdata[0].subregion;
//        console.log(actualdata[0].currencies[0].name)
                   const curr = actualdata[0].currencies[0].name;
                   const currsymbol =actualdata[0].currencies[0].symbol;
//        console.log(actualdata[0].flag);
                   const flag = actualdata[0].flag;
        
        d1.innerText = `Your country Name is ${name}`;
        d2.innerText =`Capital of ${name} is ${capital}`;
        d3.innerText =`its lies in ${subregion} region`;
        d4.innerText =`Your currency is ${currsymbol} ${curr}`;
        im.setAttribute('src' , flag);
    })
    .catch((err) => {
        console.log(err);
        d1.innerText = `Country Not Found 404 . plz check country name`;
        d2.innerText =`..`;
        d3.innerText =`..`;
        d4.innerText =`..`;
        im.setAttribute('src' , '---');
    })
    
})