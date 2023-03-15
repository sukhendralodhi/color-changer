const btn = document.getElementById('btn');
const inputEle = document.getElementById('input-field');
const resEle = document.getElementById('result');

const enter = (event) => {
    if(event.key === "Enter") {
        changeColor();
        inputEle.value = "";
    }
}


const changeColor = () => {
    if(inputEle.value === "") {
        resEle.innerText = "Please input color!";
        resEle.style.color = 'red';
        document.body.style.backgroundColor = "";
    } else {
        const colorVal = inputEle.value;
        document.body.style.backgroundColor = colorVal.toLowerCase();
        resEle.innerText = `Color: ${colorVal}`;
        resEle.style.color = 'white';
    }
  
}

btn.addEventListener('click', () => {
    changeColor();
    inputEle.value = "";
});

