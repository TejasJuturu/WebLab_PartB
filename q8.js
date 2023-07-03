function validate(email)
{
    let regex= /[A-z0-9,-.]+@[A-z0-9.]+[A-z]{2,}/
    if(regex.test(email))
    {
        alert("Valid")
    }
    else
    {
        alert("Invalid")
    }
}
let Email=prompt("Enter you email");
validate(Email);