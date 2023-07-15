// if (!username[0].match(/[a-z]/i))
// {
// alert('The first letter of the Username must be a letter!');
// return false;
// }

// if (!username.match(/^[a-z0-9]+$/i))
// {
// alert('The Username must not have anything other than Alphanumeric characters!');
// return false;
// }


// if (username.length < 3)
// {
// alert('The name of the Username must be 3 or more than 3!');
// return false;
// }

// function passwordComplexity(pas)
// {
// var theRegexForUs = /^(?=.*\d)(?=.*[/*-+!@#$^&*])(?=.*[A-Z]).{8,}$/;
// return theRegexForUs.test(pas);
// }

// var pas = document.getElementById('pass').value;
// var pasTwo = document.getElementById('repass').value;
// if (!passwordMatch(pas, pasTwo))
// {
// alert('The two passwords not matching');
// return false;
// }



// function passwordMatch(pas, pasTwo) {
// if (pas != pasTwo)
// {
// return false;
// }
// }

function validateForm() {
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
  