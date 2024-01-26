const inp =document.querySelector('.inp')
const div= document.querySelector('.sectionTree')
const btn = document.querySelector('.btn')
const container_01=document.querySelector('.container_01')
inp.value='rgb(127, 255, 212)'
btn.addEventListener("click", () => {
    inp.style.display='flex'
    if(inp.value=="#000000"){
        container_01.style.color='white'
    }
    // alert(inp.value)
    div.style.backgroundColor =inp.value
    setTimeout(()=>{
        inp.style.display='none'


    },5000)
  });
// console.log('salom')