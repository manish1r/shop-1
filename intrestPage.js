function calIntrest(){
    let today_date=new Date(document.getElementById("todaydate").value);
    let loan_date=new Date(document.getElementById("loandate").value);
    let i=parseFloat(document.getElementById("Intrest").value);
    let amt=parseFloat(document.getElementById("amount").value);
    if(!today_date||!loan_date||!i||!amt){
        document.getElementById("result").innerHTML="<b style='color:red;'>Please Enter Valid Details</b>";
        return;
    }
    let tdd=today_date.getDate(),ldd=loan_date.getDate();
    let tdm=today_date.getMonth(),ldm=loan_date.getMonth();
    let tdy=today_date.getFullYear(),ldy=loan_date.getFullYear();
    let dd=tdd-ldd;
    let mm=tdm-ldm;
    let yy=tdy-ldy;
    let yes=true;
    if(dd<0){
        mm--;
        dd+=30;
    }
    if(mm<0){
        yy--;
        mm+=12;
    }
    if(mm===0&&yy===0) yes=false;
    let intrest=0.0;
    let aamt=amt;let ddd=dd;let mmm=mm;let yyy=yy;
    if(yes){
        while(yy>0){
            if(yy===1&&mm===0){
                mm=12;
                break;
            } 
            let z=12*((amt/100)*i);
            intrest+=(12*((amt/100)*i));
            amt+=12*((amt/100)*i);
            //  System.out.println("in Intrest : "+intrest+" amount : "+amt+" yy="+yy+" yearly:"+z);
            console.log("in Intrest : "+intrest+" amount : "+amt+" yy="+yy+" yearly:"+z);
            yy--;
        }
        console.log("\n\nout 1 Intrest : "+intrest+" amount : "+amt+" yy="+yy+" mm="+mm+" dd="+dd);
        // System.out.println("\n\nout 1 Intrest : "+intrest+" amount : "+amt+" yy="+yy);
        if(mm>0) intrest+=((mm)*((amt/100)*i));
        if(dd>0) intrest+=((amt/100)*i);
        console.log("\n\nout 2 Intrest : "+intrest+" amount : "+amt+" yy="+yy+" mm="+mm+" dd="+dd);
        intrest-=(aamt/100)*i;
    }
    console.log("\n\nout 3 Intrest : "+intrest+" amount : "+amt+" yy="+yy+" mm="+mm+" dd="+dd);
    let total=intrest+aamt;
    document.getElementById("result").innerHTML=`
        <b style='color:blue; fontSize:42px;'>Details of Loan   (Monthly Intrest) --></b><br><br>
        <b>The Total Days=${ddd} days ${mmm} months ${yyy} years</b><br>
        <b>Total Intrest : ${intrest.toFixed(3)}</b><br>
        <b>Total Amount to be paid : ${total.toFixed(3)}</b><br>
    `;
}