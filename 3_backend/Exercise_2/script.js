// Defining object
let userProfile = {
    firstName: 'Elvis',
    lastName: 'Masache',
    gender: 'Male',
    age: 32,
    address: '448 N 7th St.',
    phoneNumber: {
        mobile: '0984368242',
        landline: '6789'
    },
    getDetails: function() {
        return `Name: ${this.firstName} ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}, Address: ${this.address}`;
    }
};

// Display the user details in the HTML
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userDetails').innerText = userProfile.getDetails();
});
