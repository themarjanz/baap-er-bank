// // handle deposit button event
// document.getElementById('deposit-button').addEventListener('click', function () {
//     // console.log('deposit button clicked');    for check

//     // get the amount deposit
//     const depositInput = document.getElementById('deposit-input');
//     const depositAmount = depositInput.value;
//     console.log(depositAmount);


//     const depositTotal = document.getElementById('deposit-total');
//     // console.log(depositTotal.innerText);  check[tag katra like h2 h3 h4 tahole innerText nita hobe & input hobe value dela cholbe]

//     depositTotal.innerText = depositAmount;

//     // clear the deposit input field
//     depositInput.value = '';


// });



// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposit button clicked');    for check

    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);


    // update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;


    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';

});

// handle withdraw event handler start
//click withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    //input of withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    /// clear withdraw input
    withdrawInput.value = '';
});
