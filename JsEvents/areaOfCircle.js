
function findAreaOfCircle() {
    let r = document.getElementById('id1').value
    let Result = 3.14 * eval(r) * eval(r)
    alert(Result)
}
function clearData() {
    document.getElementById('id1').value = ''
}