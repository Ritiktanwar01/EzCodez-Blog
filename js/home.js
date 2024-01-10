function btntoggle(){
    let button = document.getElementById('btntoggle')
    button.classList.toggle('togglebtn')
    button.classList.toggle('togglebtn-2')
    console.log('clicked')
}
function inptclr(){
    document.getElementById('inputBX').value = ""
}
function searchRemove(){
    document.getElementById('searchSec').style.display = 'none'
}
function searchShow(){
    document.getElementById('searchSec').style.display = 'flex'
}