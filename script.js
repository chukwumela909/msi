console.log('kkkkk')
const submitButton = document.querySelector('#bnb');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitConsultationForm();
});

function submitConsultationForm() {
    console.log('llllll')

    // Show loading state
    
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<span class="elButtonMain">Submitting...</span>';
 

    // Hide any previous messages
    document.getElementById('form-success-message').style.display = 'none';
    document.getElementById('form-error-message').style.display = 'none';

    // Get form data
    const formData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        state: document.getElementById('state').value,
        accepted_terms: document.getElementById('accepted_terms').checked
    };

    console.log(JSON.stringify(formData))
    

    // API endpoint - replace with your actual endpoint
    const apiEndpoint = 'https://rotary-server-siq2.onrender.com/send-email';

    // Send data to the endpoint
    axios.post(apiEndpoint, formData, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            // Show success message
            document.getElementById('form-success-message').style.display = 'block';

            // Reset form
            // document.getElementById('consultation-form').reset();

            console.log(response)
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('form-error-message').style.display = 'block';
        })
        .finally(() => {
            // Restore button state
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        })
}