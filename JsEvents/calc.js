function doSum() {
    //Getting value from id1
    let n1 = document.getElementById('id1').value
    //Getting value from id2
    let n2 = document.getElementById('id2').value
    let sum = eval(n1) + eval(n2)
    alert(sum)
}
function doSub() {
    let n1 = document.getElementById('id1').value
    let n2 = document.getElementById('id2').value
    let sub = eval(n1) - eval(n2)
    alert(sub)
}
function doMul() {
    let n1 = document.getElementById('id1').value
    let n2 = document.getElementById('id2').value
    let sub = eval(n1) * eval(n2)
    alert(sub)
}
function doDiv() {
    let n1 = document.getElementById('id1').value
    let n2 = document.getElementById('id2').value
    let div = eval(n1) / eval(n2)
    alert(div)
}
function doMod() {
    let n1 = document.getElementById('id1').value
    let n2 = document.getElementById('id2').value
    let mod = eval(n1) % eval(n2)
    alert(mod)
}
function eraseData() {
    document.getElementById('id1').value = ''
    document.getElementById('id2').value = ''

}