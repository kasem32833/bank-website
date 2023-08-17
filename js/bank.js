document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input');
    let depositeAmount = depositeInput.value


    const deposite = document.getElementById('deposite');
    let previousDeposite = deposite.innerText;
    depositeTotal = parseFloat(depositeAmount) + parseFloat(previousDeposite);
    deposite.innerText = depositeTotal;


    // clear deposite input field
    depositeInput.value = '';   
    // console.log(depositeAmount, previousDeposite );
    // balance to total upgrade

    let balanceTotal = document.getElementById('blance-total')
    let previousTotal = balanceTotal.innerText
    console.log(balanceTotal);
    let currentBalanceTotal = parseFloat(previousTotal) + parseFloat(depositeAmount);
    balanceTotal.innerText =  currentBalanceTotal;
    
})
