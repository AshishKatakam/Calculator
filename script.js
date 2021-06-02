const input=document.querySelector('input');
const buttons=document.querySelectorAll('button');
for(let btn of buttons){
    btn.addEventListener('click',function(e){
        let buttonText=e.target.innerText;
        switch(buttonText){
            case 'AC':
                input.value="";
                break;
            case 'DEL':
                input.value=input.value.substring(0,input.value.length-1);
                break;
            case '1/x':
                input.value='1'+'/'+'('+input.value+')';
                break;
            case '=':
                try{
                    input.value=eval(input.value);
                }catch{
                    input.value="invalid operation";
                }
                break;
            case 'sqrt':
                try{
                    input.value=Math.sqrt(eval(input.value));
                }catch{
                    input.value="invalid operation";
                }
                break;
            case 'log':
                try{
                    input.value=Math.log(eval(input.value));
                }catch{
                    input.value="invalid operation";
                }
                break;
            case 'ln':
                try{
                    input.value=Math.LN10(eval(input.value));
                }catch{
                    input.value="invalid operation";
                }
                break;
            case 'PI':
                input.value+=Math.PI;
                break;
            case 'PI':
                input.value+=Math.E;
                break;
            default:
                input.value+=buttonText;

        }
        });
}