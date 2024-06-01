class Student{
    constructor(firstname, lastname, credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = this.credit;

    }

getFullName(){
    let fullname = `${this.firstname} ${this.lastname} is my full name`;
return fullname;
}


}
const elvis = new Student ('Elvis', 'Masache', 32)
console.log(elvis.getFullName());

