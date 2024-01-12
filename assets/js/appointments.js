document.addEventListener('DOMContentLoaded', function() {

    // Function to handle 'Accept' button click
    function acceptAppointment(event) {
        console.log('Appointment accepted');
        // Implement further actions
    }

    // Function to handle 'Cancel' button click
    function cancelAppointment(event) {
        console.log('Appointment canceled');
        // Implement further actions
    }

    // Attaching event listeners to 'Accept' buttons
    document.querySelectorAll('.bg-success-light').forEach(button => {
        button.addEventListener('click', acceptAppointment);
    });

    // Attaching event listeners to 'Cancel' buttons
    document.querySelectorAll('.bg-danger-light').forEach(button => {
        button.addEventListener('click', cancelAppointment);
    });

    // Function to handle 'View' button click
    function viewDetails(event) {
        // Code to display modal with appointment details
        $('#appt_details').modal('show');
    }

    // Attaching event listeners to 'View' buttons
    document.querySelectorAll('.bg-info-light').forEach(button => {
        button.addEventListener('click', viewDetails);
    });
});
