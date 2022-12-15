  var Name = document.getElementById('name');
    const Name = async (params) => {
        const name1 = document.getElementById('name').value.trim();
        const response = await fetch('/api/users/', {
            method: 'GET',
            body: JSON.stringify({ Name }),
            headers: { 'Content-Type': 'application/json'},
        });
    };


let addBalanceButton = document.getElementById('addBalanceButton');
const addBalanceRequest  = async (params) => {
    const balance = document.getElementById('balance').value.trim();
    if (balance) {
        const response = await fetch('/api/addBalance', {
            method: 'PUT',
            body: JSON.stringify({ balance }),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            alert('Balance has been added!');
        } else {
            alert('An error occurred');
        }
    }
  };
addBalanceButton.addEventListener('click', addBalanceRequest)



