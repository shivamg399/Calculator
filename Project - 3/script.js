let string="";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (events)=>{
        if(events.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if(events.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }

        else if(events.target.innerHTML == 'AC'){
            string = string.substr(0,string.length-1);
            document.querySelector('input').value = string;
        }

        else{
            console.log(events.target)
            string = string + events.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})