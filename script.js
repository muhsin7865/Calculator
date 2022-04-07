function displayNum(num){
    result.value += num
}
function clearBox(){
    result.value = ''
}
function evaluateExpression(){
    let expr = result.value
    let res = eval(expr)
    result.value = res
}