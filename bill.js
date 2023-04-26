function Increment(input){
    var count=Number(document.getElementById('count').innerText)
    count = count + input
    document.getElementById('count').innerText=count
}
function Decrement(input){
    var count=Number(document.getElementById('count').innerText)
    count=count-input
    document.getElementById('count').innerText=count
}

const calculateBill=(tipPercent=0)=> {
let billamount = Number(document.getElementById('bill-input').value)
let NOofpeople=Number(document.getElementById('people-input').value)


let tipamount=(tipPercent/100)*billamount
billamount += tipamount
let tipamountperperson=tipamount/NOofpeople
let totalperperson= billamount/NOofpeople
document.getElementById('total-per-person').innerText=`₹ ${totalperperson.toFixed(2)}`
document.getElementById('tip-per-person').innerText=`₹ ${tipamountperperson.toFixed(2)}`
}

const reset = () => {
    document.getElementById('total-per-person').innerText='₹ 0.00'
    document.getElementById('tip-per-person').innerText='₹ 0.00'
    document.getElementById('bill-input').value=''
    document.getElementById('people-input').value='1'
}
