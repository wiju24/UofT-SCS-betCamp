let addBalanceButton = document.getElementById('addBalanceButton')


function addBalanceRequest(params) {
    fetch('/api/addBalance',{
        method: 'POST',
        body: JSON.stringify({balance }),
        headers: { 'Content-Type': 'application/json'},
    })
    
}

addBalanceButton.addEventListener('click', addBalanceRequest)