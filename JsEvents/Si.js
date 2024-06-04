function findSimpleInterest() {
    let p = document.getElementById('p').value
    let r = document.getElementById('r').value
    let t = document.getElementById('t').value
    let si = eval(p) * eval(t) * eval(r) / 100
    alert(si)
}
function clearData() {
    document.getElementById('p').value = ''
    document.getElementById('r').value = ''
    document.getElementById('t').value = ''
}