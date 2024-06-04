function abSquare() {
    let a = eval(document.getElementById('num1').value)
    let b = eval(document.getElementById('num2').value)
    let result = (a * a) + (b * b) + (2 * a * b)
    alert(result)
}
function eraseData() {
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
}