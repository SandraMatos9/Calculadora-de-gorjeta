function calculateBill(event){
    event.preventDefault();
    let bill=document.getElementById('bill').value;
    let serviceQuali=document.getElementById('serviceQuali').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill=='' | serviceQuali == 0){
        alert("Por favor, preencha os valores")
        return

    }

    if(numOfPeople =='' | numOfPeople <=1){
        numOfPeople=1;
        document.getElementById('each').style.display = "none"

    } else{
        document.getElementById('each').style.display = "block"

    }

    let total = (bill*serviceQuali)/numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
document.getElementById('totalTip').style.display="block";


 
}

document.getElementById('totalTip').style.display="none";
document.getElementById('each').style.display="none";
document.getElementById('tipsForm').addEventListener('submit', calculateBill)
