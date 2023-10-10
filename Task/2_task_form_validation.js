let formvalidation=()=>
{
    let fname = document.forms["myform"].fname.value;
    let lname = document.forms["myform"].lname.value;
    let mail = document.forms["myform"].mailid.value;
    let mobile = document.forms["myform"].mob.value;
    let address = document.forms["myform"].add.value;
    let city = document.forms["myform"].city.value;
    let pin = document.forms["myform"].pin.value;
    let state = document.forms["myform"].state.value;
    let country = document.forms["myform"].cou.value;

    let reload=true;
// First Name
    if(fname.length==0)
    {
        document.getElementById("fname1").innerHTML="FirstName should't empty";
        reload=false;
    }
    else if(!((/^[A-Za-z]+$/).test(fname)))
    {
        document.getElementById("fname1").innerHTML="only alphabets";
        reload=false;
    }
// Last Name
    if(lname.length==0)
    {
        document.getElementById("lname1").innerHTML="LastName should't empty";
        reload=false;
    }
    else if(!((/^[A-Za-z]+$/).test(lname)))
    {
        document.getElementById("lname1").innerHTML="only alphabets";
        reload=false;
    }
// Mail Id
    if(mail.length == 0)
    {
        document.getElementById("mailid1").innerHTML="mail sholud't empty";
        reload=false;
    }
    else if(!((/^(?=.*[@.])[a-z0-9@.]+$/).test(mail)))
    {
        document.getElementById("mailid1").innerHTML="mail sholud contain digits,alpha,@,.";
        reload=false;
    }
// mobile no
    if(mobile.length==0)
    {
        document.getElementById("mob1").innerHTML="mobile number should't empty";
        reload=false;
    }
    else if(!((/^[0-9]{10}$/).test(mobile)))
    {
        document.getElementById("mob1").innerHTML="only ten numbers";
        reload=false;
    }
// address
    if(address.length==0)
    {
        document.getElementById("add1").innerHTML="Address should't empty";
        reload=false;
    }
    else if(!((/^[A-za-z0-9\s.,/-]+$/).test(address)))
    {
        document.getElementById("add1").innerHTML="Address should contain digits,/,-,alpha ";
        reload=false;
    }
// city
    if(city.length==0)
    {
        document.getElementById("city1").innerHTML="city should't empty";
        reload=false;
    }
    else if(!((/^[A-Za-z\s]+$/).test(city)))
    {
        document.getElementById("city1").innerHTML="only alphabets";
        reload=false;
    }
// pin code
     if(pin.length==0)
    {
        document.getElementById("pin1").innerHTML="pin code should't empty";
        reload=false;
    }
    else if(!((/^[0-9]{6}$/).test(pin)))
    {
        document.getElementById("pin1").innerHTML="only 6 digits";
        reload=false;
    }
// state
    if(state.length==0)
    {
        document.getElementById("state1").innerHTML="state should't empty";
        reload=false;
    }
    else if(!((/^[A-Za-z\s]+$/).test(state)))
    {
        document.getElementById("state1").innerHTML="only alphabets";
        reload=false;
    }
// country
    if(country.length==0)
    {
        document.getElementById("cou1").innerHTML="country should't empty";
        reload=false;
    }
    else if(!((/^[A-Za-z\s]+$/).test(country)))
    {
        document.getElementById("cou1").innerHTML="only alphabets";
        reload=false;
    }

    return reload;
}
