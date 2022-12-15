const loginForm = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-log').value.trim();
  const password = document.querySelector('#password-log').value.trim();

  console.log(email,password)

if (email && password) {
  const response = await fetch('/users/login', {
      method: 'POST',
      body:  JSON.stringify({ email, password}),
      headers:  { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      document.location.replace('/home');
      
  } else {
      alert('An error occurred');
  }

}
};




const SignUp  = async (event) => {
  event.preventDefault();
  console.log('hello  sldjfld flsfjksd ')
  document.location.replace('/signup');
  const name = document.querySelector('#name-sign').value.trim();
  const email = document.querySelector('#email-sign').value.trim();
  const password = document.querySelector('#password-sign').value.trim();
  const balance = document.querySelector('#balance-sign').value.trim();

  if (name && email  && password && balance) {
      const response = await fetch('/users/', {
          method: 'POST',
          body: JSON.stringify({ name, email, password, balance }),
          headers: { 'Content-Type': 'application/json'},
      });

      if (response.ok) {
          document.location.replace('/home');
      } else {
          alert('An error occurred');
      }
  }
};

document.querySelector('#login').addEventListener('click', loginForm);
document.querySelector('#signUp').addEventListener('click', SignUp);

