//document.getElementById('h2').style.color ='Green'
function findAverage() {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = document.getElementById('n3').value
    let n4 = document.getElementById('n4').value
    let n5 = document.getElementById('n5').value
    let n6 = document.getElementById('n6').value
    let Result = (eval(n1) + eval(n2) + eval(n3) + eval(n4) + eval(n5) + eval(n6)) / 6;
    alert(Result)
}
function clearData() {
    document.getElementById('n1').value = ''
    document.getElementById('n2').value = ''
    document.getElementById('n3').value = ''
    document.getElementById('n4').value = ''
    document.getElementById('n5').value = ''
    document.getElementById('n6').value = ''
}