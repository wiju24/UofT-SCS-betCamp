const loginForm = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

if (email && password) {
  const response = await fetch('/api/users/login', {
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

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email  && password) {
      const response = await fetch('api/users', {
          method: 'POST',
          body: JSON.stringify({ name, email,  password }),
          headers: { 'Content-Type': 'application/json'},
      });

      if (response.ok) {
          document.location.replace('/home');
      } else {
          alert('An error occurred');
      }
  }
};

document.querySelector('#login-form').addEventListener('onclick', loginForm);
document.querySelector('#signup-form').addEventListener('onclick', SignUp);