let btn = document.querySelectorAll('.buy');

btn.forEach((n)=>{
    n.addEventListener('click',()=>{
        n.innerHTML ='Clicked';
        n.style.backgroundColor = 'green';
        alert('Success')
        
    })
})
