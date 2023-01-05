



//supondo que eu ja tenha o txto do input


let input = document.querySelector('input');
let cont = 0;
input.addEventListener('keyup',(event) =>{

    if(event.code === 'Enter'){
        cont++;
        let li = document.createElement('li');
        li.innerText = `${cont}- ${input.value}`;
        document.querySelector('ul').append(li);
        input.value = "";
    }
})