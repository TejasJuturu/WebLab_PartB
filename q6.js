let checkstats=(kg)=>
{
    let lbs=kg*2.2;
    if(lbs>150)
    {
        alert("OBESE");
    }
    else if(lbs>100&&lbs<150)
    {
        alert("YOU ARE OK")
    }
    else
    {
        alert("UNDERWEIGHT")
    }
}
let wkg=prompt("Enter the weight in KG")
checkstats(wkg);