const item=document.querySelectorAll(".accordian-item");
const button=document.querySelectorAll(".arrow");
const answer=document.querySelectorAll(".accordian-answer")

function dropdown(){
    console.log(this)
    this.children[0].classList.toggle("open")
    this.children[1].classList.toggle("open")
}


item.forEach(arrow =>{
    arrow.addEventListener("click",dropdown)
})
