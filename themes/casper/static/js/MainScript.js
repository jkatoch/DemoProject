            
function updateTextInput(val) {
          document.getElementById('amountInput').innerHTML=val;
           document.getElementById('amountValue').innerHTML=val; 
           document.getElementById('interestValue').innerHTML=Number(val)*0.10;
           document.getElementById('returnValue').innerHTML=Number(val)+(Number(val)*0.10);
        }

  function getdate(td)
  { var today=new Date();
  	var presentDate=today.getDate();
  	var selecteddate=td.innerHTML;
  	var completedate=selecteddate+" "+document.getElementById('calendar-month-year').innerHTML;
  	var days=Number(selecteddate)-Number(presentDate);
  	document.getElementById('daysLeft').innerHTML="for"+" "+days+" "+"days";
  	document.getElementById('dateInput').innerHTML=completedate;
  	document.getElementById('returnDay').innerHTML="on "+ completedate;
    
  }