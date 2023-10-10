let food = new Array("Donut","Pizza","Briyani","Fried Rice","Paneer Rice")

let listall_have=()=>
{
    let foodname="";
    food.map((data)=>
    {
        foodname+="<tr><td>"+data+"</td></tr> "
    })
    document.getElementById("menu").innerHTML="<table align='center' border='2px' cellpadding='8px' cellspacing='5px' class='text-light mt-5'><thead><tr><th>Menu</th></tr></thead><tbody><div class='col'><tr><td>"+foodname+"</td></tr></div></tbody></table>"
    document.getElementById("ff1").innerHTML="<table align='center' class='text-light'><thead><tr><th> Need </th></tr></thead><tbody><tr><td>"+foodname+"</td></td></tbody></table>"
    document.getElementById("ff2").innerHTML="<table align='center' class='text-light'><thead><tr><th> Have </th></tr></thead><tbody><tr><td>"+foodname+"</td></td></tbody></table>"
    // document.getElementById("ff1").innerHTML="<table align='center' class='text-light'><thead><tr><th> Need </th></tr></thead><tbody>"+foodname+"</tbody></table>"
    // document.getElementById("ff1").innerHTML="<table align='center' border='2px' cellpadding='8px' cellspacing='5px' class='text-light mt-5'><thead><tr><th id='need1'>Need</th><th id='have1'>Have</th></tr></thead><tbody><div class='col'><tr><td>"+foodname+"</td></tr></div><div class='col'><tr><td>"+foodname+"</td></tr></div></tbody></table>"
    // document.getElementById("ff2").innerHTML="<table align='center' class='text-light'><thead><tr><th> Have </th></tr></thead><tbody><tr><td>"+foodname+"</td></td></tbody></table>"

}


let add_need=()=>
{
    let newfood = document.getElementById("foodid").value;
    food.push(newfood);
    alert(newfood+" new food item added")
    listall_have();
    let newfood1 = document.getElementById("foodid1").value;
    food.push(newfood1);
    alert(newfood1+" new food item added")
    listall_have();
}
