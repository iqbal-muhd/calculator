function displaycontent(content){
    result.value+=content
}
function calculate(){
    result.value=eval(result.value)
}
function clearscreen(){
    result.value=""
}
function removedigit(){
    result.value=result.value.slice(0,-1)
}