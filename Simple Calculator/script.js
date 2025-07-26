function compute()
{
    p = document.getElementById("principal").value;
    let rateValue=document.getElementById('rate').value;
    let years=document.getElementById('years').value;
    const interest=p*years*rateValue/100;
    const Amount=parseInt(p)+parseFloat(interest);
    let result=document.getElementById('result');
    let year=new Date().getFullYear+parseInt(years);
    if(p===0 || p<0){
        alert('Please Enter a positive number');
        document.getElementById('principal').focus();
    }
    else{
        result.innerHTML=`If you deposit ${p},<br>
at an interest rate of ${rateValue}%.<br>
You will receive an amount of ${interest},<br>
in the year ${year}<br>`
    }
    


    
    
}
const updateRate=()=>{
    let rateValue=document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rateValue;
    


}
