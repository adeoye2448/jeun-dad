


// To make a post request to create a customer
const myCustomerForm = document.getElementById('customer-signup-form')

function handleCustomerSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("firstName", document.getElementById('firstName').value);
    formData.append("lastName", document.getElementById('lastName').value);
    formData.append("email", document.getElementById('email').value);
    formData.append("role", document.getElementById('role').value);
    formData.append("country", document.getElementById('country').value);
    formData.append("state", document.getElementById('state').value);
    formData.append("city", document.getElementById('city').value);
    formData.append("phone", document.getElementById('phone').value);
    formData.append("address", document.getElementById('address').value);
    formData.append("password", document.getElementById('password').value);

    console.log("formData:", formData);



    fetch("https://vogue-vista-backend-c8yw.onrender.com/api/users/signup", {
    method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(result => {
        console.warn("result:", result);
        if(result.error){
         alert("Sign up failed")
        }

        else{
            alert("Sign up Successful!")
        }
    })
    .catch(error => {
      console.error('Error:', error);
    //   alert(error.error);
    });
   
};

myCustomerForm,addEventListener('submit', handleCustomerSubmit)