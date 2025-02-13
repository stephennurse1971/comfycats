var table = document.getElementById("table").getElementsByTagName('tbody')[0];
var count=0;
var container=[];
var counter=0;


var flag=0;
for(let i=0;i<table.rows.length;i++){
    flag=0;
    var date=table.rows[i].cells[4].textContent;
    var splitDate = date.split("-");
    for(let j=0;j<container.length;j++){

        if(container[j][0]==table.rows[i].cells[1].textContent && container[j][1]==table.rows[i].cells[2].textContent && container[j][2]==splitDate[1] && container[j][3]==table.rows[i].cells[0].textContent){
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        container[counter]=[];
        container[counter][0]=table.rows[i].cells[1].textContent;
        container[counter][1]=table.rows[i].cells[2].textContent;
        container[counter][2]=splitDate[1];
        container[counter][3]=table.rows[i].cells[0].textContent;
        counter++;
    }
}


/*
var myTable=document.getElementById('newArray').getElementsByTagName('tbody')[0];
for(let k=0;k<container.length;k++){
    var row=myTable.insertRow(k);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cells4=row.insertCell(3);
    var cells5=row.insertCell(4);
    cell1.innerHTML=container[k][0];
    cell2.innerHTML=container[k][1];
    cell3.innerHTML=container[k][2];
    cells4.innerHTML=container[k][3];
    cells5.innerHTML='0';
}
*/


// table.style.display='none';

// calculating AGS

/*var table2=document.getElementById('newArray');*/


var AGS = 0;
var divider=0;
for(let m=0;m<container.length;m++) {

    for (let i = 0; i < table.rows.length; i++) {
        var date = table.rows[i].cells[4].textContent;
        var number=table.rows[i].cells[5].textContent;
        var splitDate = date.split("-");
        if (container[m][0] === table.rows[i].cells[1].textContent && container[m][1] == table.rows[i].cells[2].textContent && container[m][2] == splitDate[1] && container[m][3] == table.rows[i].cells[0].textContent) {
            AGS = AGS+parseFloat(number.replace(/,/g, ''));
            divider++;

        }
    }

    AGS = (AGS/divider);
    for (let j = 0; j < table.rows.length; j++) {
        var date = table.rows[j].cells[4].textContent;
        var number=table.rows[j].cells[5].textContent;
        var splitDate = date.split("-");
        if (container[m][0] === table.rows[j].cells[1].textContent && container[m][1] == table.rows[j].cells[2].textContent && container[m][2] == splitDate[1] && container[m][3] == table.rows[j].cells[0].textContent) {
        //   AGS.toFixed(2);
         //  AGS.toLocaleString();
          //  var AGSFixed= AGS.toFixed(2);
           // var nf = new Intl.NumberFormat();
            table.rows[j].cells[7].innerHTML=  AGS.toLocaleString('en-US', {maximumFractionDigits:2, minimumFractionDigits:2})
        }
    }



  /*  table2.rows[m+1].cells[4].innerHTML=AGS.toLocaleString();*/
    AGS=0;
    divider=0;

}

/*table2.style.display='none';*/









// AVS calculation end