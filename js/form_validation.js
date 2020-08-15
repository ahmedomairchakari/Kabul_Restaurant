function validateForm() {
    var name = document.forms["myForm"]["Name"].value;
    var Pnumber = document.forms["myForm"]["Pnumber"].value;
    var Message = document.forms["myForm"]["Message"].value;
    var Email = document.forms["myForm"]["Email"].value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


    if (name == "") {
        alert("Name must be filled out");
        return false;
    } else if (Pnumber.length < 10) {
        alert("Phone number must be 10 digits.");
        return false;
    } else if (Message == "") {
        alert("Name must be filled out");
        return false;
    } else if (reg.test(Email) == false) {
        alert('Invalid Email Address');
        return (false);
    }
}
