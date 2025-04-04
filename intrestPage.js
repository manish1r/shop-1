function calIntrest(){
    let today_date=new Date(document.getElementById("todaydate").value);
    let loan_date=new Date(document.getElementById("loandate").value);
    // let i=parseFloat(doucument.getElementById("Intrest").value);
    let i=parseFloat(document.getElementById("Intrest").value);
    let amt=parseFloat(document.getElementById("amount").value);
    if(today_date===null||loan_date===null||i===null||amt===null){
        document.getElementById("result").innerHTML="<b style='color:red;'>Please Enter Valid Details</b>";
        return;
    }
    let tdd=today_date.getDate(),ldd=loan_date.getDate();
    let tdm=today_date.getMonth(),ldm=loan_date.getMonth();
    let tdy=today_date.getFullYear(),ldy=loan_date.getFullYear();
    let dd=tdd-ldd;
    let mm=tdm-ldm;
    let yy=tdy-ldy;
    if(dd<0){
        mm--;
        dd+=30;
    }
    if(mm<=0){
        yy--;
        mm+=12;
    }
    let aamt=amt;let ddd=dd;let mmm=mm;let yyy=yy;
    if(dd>0) mm++;
    let intrest=0.0;
    while(yy>0){
        let z=12*((amt/100)*i);
        intrest+=(12*((amt/100)*i));
        amt+=12*((amt/100)*i);
        // System.out.println("in Intrest : "+intrest+" amount : "+amt+" yy="+yy+" yearly:"+z);
        yy--;
    }
    // System.out.println("\n\nout 1 Intrest : "+intrest+" amount : "+amt+" yy="+yy);
    if(mm>0) intrest+=((mm-1)*((amt/100)*i));
    let total=intrest+aamt;
    document.getElementById("result").innerHTML=`
        <b style='color:blue;'>Details of Loan (Monthly Intrest) --></b><br><br>
        <b>The Total Days=${ddd} days ${mmm} months ${yyy} years</b><br>
        <b>Total Intrest : ${intrest.toFixed(3)}</b><br>
        <b>Total Amount to be paid : ${total.toFixed(3)}</b><br>
    `;
}