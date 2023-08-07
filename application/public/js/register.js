

function validateForm() {
    console.log(" dsxnjjsn")
    var username = document.getElementsByName('username')[0].value;
    var email = document.getElementsByName('E-mail')[0].value;
    var password = document.getElementsByName('password')[0].value;
    var confirmPassword = document.getElementsByName('password')[1].value;
    var ageCheckbox = document.querySelector('input[type="checkbox"]');
    var tosCheckbox = document.querySelectorAll('input[type="checkbox"]')[1];
    
    // Validate username
    if (!username.match(/^[a-zA-Z]\w{2,}$/)) {
      alert('Username must begin with a character and be 3 or more alphanumeric characters!');
      return false;
    }
    
    // Validate password
    if (!password.match(/^(?=.*\d)(?=.*[/*\-+!@#$^&*])(?=.*[A-Z]).{8,}$/)) {
      alert('Password must be 8 or more characters long, contain at least 1 uppercase letter, 1 number, and 1 special character.');
      return false;
    }
  
    // Confirm password
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return false;
    }
  
    // Validate email
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      alert('Please enter a valid email address!');
      return false;
    }
  
    // Validate age checkbox
    if (!ageCheckbox.checked) {
      alert('You must confirm that you are 13+ years of age!');
      return false;
    }
  
    // Validate TOS checkbox
    if (!tosCheckbox.checked) {
      alert('You must accept the Terms of Service and Privacy Rules!');
      return false;
    }
  
    alert('Form submitted successfully!');
    return true; // Allow form submission
  }
  