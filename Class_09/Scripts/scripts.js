const person = {
    firstName: "John",
    lastName: "Doe",
    id: 50,
    fullName: function() {
        return this.firstName + " " + this.lastName;},
    address: {country: "Latvia", city: "Riga"}
    };