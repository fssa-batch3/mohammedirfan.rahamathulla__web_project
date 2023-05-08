class user{
    firstName
    lastName
    phoneNumber
    password
    validateFirstName(firstName){
            pattern = new RegExp (/[a-z]/)
           return  pattern.test(firstName) //returns true/false
    }

    validateLastName(lastName){
        pattern = new RegExp (/[a-z]/)
       return  pattern.test(lastName)
    }

    validatePhoneNumber(phoneNumber){
        pattern = new RegExp (/[6-9]{1}[0-9]{9}/10/)
       return  pattern.test(phoneNumber)
    }

    validatePassword(password){
        pattern = new RegExp (/[a-z]/)
       return  pattern.test(password)
    }
}

const _firstName = "surya sir"
const _lastName = "ayya"
const _email = "suryasir@gmail.com"
const _phoneNumber = "9876543211"
const _password = "qwerty"

const user = new User();
if(user.validateFirstName(_firstName)){
console.log("First Name is Valid")
}else{
    console.log("First Name is Not Valid")
}