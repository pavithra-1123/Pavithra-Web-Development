let h1 = new Array("Happy Birthday Muin")


let hbd1=()=>
{
    let h2="";
    h1.map((data)=>
    {
        h2+="<tr><td>"+data+"</td></tr> "
    })
    document.getElementById("ff1").innerHTML="<table align='center' border='2px' cellpadding='8px' cellspacing='5px' class='text-light mt-5'><thead><tr><th>Menu</th></tr></thead><tbody><div class='col'><tr><td>"+h2+"</td></tr></div></tbody></table>"
}