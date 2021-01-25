const answers=document.querySelectorAll('input');
answers.forEach(answer=>{
    answer.addEventListener('click',(e)=>{
        answers.forEach(answer=>{
            if(answer.checked){
              answer.checked=false;
              e.target.checked=true;
            }
        })
        
    }
    )
})