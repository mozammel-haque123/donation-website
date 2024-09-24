
// card-1
const buttonNow = document.getElementById("donate-now-won");
buttonNow.addEventListener("click", function() {

 let inputNumber = parseFloat(document.getElementById("input-number").value);


 const parentBdt = parseFloat(document.getElementById("parent-bdt").innerText);

 

if(isNaN(inputNumber) || inputNumber <= 0){
    alert("A negative number is not a whole number, so you choose a valid number."); 

}else if(inputNumber > parentBdt){
    alert("Donation amount exceeds the available balance.");

}else{
const chailDdt = document.getElementById("chail-bdt");
chailDdt.innerHTML = inputNumber;

const newBdtValue = parentBdt - inputNumber;
document.getElementById("parent-bdt").innerText = newBdtValue;
}



const historyDheka = document.createElement("div");
    historyDheka.className = "rounded-sm collapse-open border-base-300 bg-base-200 border p-5";
    historyDheka.innerHTML = `

    <p>Cause: ${hwon.innerText}</p>
        <p class="text-xs text-gray-500 my-2">Amount: ${inputNumber.toFixed(2)}</p>
        <p class="text-xs text-gray-500"> Date: ${new Date().toLocaleDateString()}</p>
    
        
    `;

    const historiDhek = document.getElementById("chaking-time");
    historiDhek.insertBefore(historyDheka, historiDhek.firstChild);








 
} );





// card-2
const donateNowTow = document.getElementById("donate-now-tow");
donateNowTow.addEventListener("click", function() {

 let inputNumberTow = parseFloat(document.getElementById("input-number-tow").value);

 const parentBdt = parseFloat(document.getElementById("parent-bdt").innerText);

 if (isNaN(inputNumberTow) || inputNumberTow <= 0) {
    alert("A negative number is not a whole number, so please choose a valid number."); 
 } else if (inputNumberTow > parentBdt) {
    alert("Donation amount exceeds the available balance.");
 } else {
    const chailDdtTow = document.querySelector(".chail-bdt-tow");
    chailDdtTow.innerText = inputNumberTow;

    const newBdtValueTow = parentBdt - inputNumberTow;
    document.getElementById("parent-bdt").innerText = newBdtValueTow;
 }




 const historyDheka2 = document.createElement("div");
 historyDheka2.className = "rounded-sm collapse-open border-base-300 bg-base-200 border my-4 p-5";
 historyDheka2.innerHTML = `

 <p>Cause: ${htow.innerText}</p>
     <p class="text-xs text-gray-500 my-2">Amount: ${inputNumberTow.toFixed(2)}</p>
     <p class="text-xs text-gray-500">Date ${new Date().toLocaleDateString()}</p>
 
     
 `;

 const historiDhek2 = document.getElementById("chaking-time");
 historiDhek2.insertBefore(historyDheka2, historiDhek2.firstChild);







});





// card-3



const donateNowtehre = document.getElementById("donate-now-tehre");
donateNowtehre.addEventListener("click", function() {

 let inputNumbertehre = parseFloat(document.getElementById("input-number-tehre").value);

 const parentBdt = parseFloat(document.getElementById("parent-bdt").innerText);

 if (isNaN(inputNumbertehre) || inputNumbertehre <= 0) {
    alert("A negative number is not a whole number, so please choose a valid number."); 
 } else if (inputNumbertehre> parentBdt) {
    alert("Donation amount exceeds the available balance.");
 } else {
    const chailDdttehre = document.getElementById("chail-bdt-tehre");
    chailDdttehre.innerText = inputNumbertehre;

    const newBdtValuetehre = parentBdt - inputNumbertehre;
    document.getElementById("parent-bdt").innerText = newBdtValuetehre;
 }







 const historyDheka3 = document.createElement("div");
 historyDheka3.className = "rounded-sm collapse-open border-base-300 bg-base-200 border p-5";
 historyDheka3.innerHTML = `

 <p>Cause: ${hthere.innerText}</p>
     <p class="text-xs text-gray-500 my-2">Amount: ${inputNumbertehre.toFixed(2)}</p>
     <p class="text-xs text-gray-500">Date ${new Date().toLocaleDateString()}</p>
 
     
 `;

 const historiDhek3 = document.getElementById("chaking-time");
 historiDhek3.insertBefore(historyDheka3, historiDhek3.firstChild);



});






// hidden card-1 



const showButton = document.getElementById("donate-now-won");
const odressoOwan = document.getElementById("odresso-owan");
const closeConfirma = document.getElementById("closeConfirmation");

showButton.addEventListener("click", function(){
    odressoOwan.classList.remove("hidden");
} );

closeConfirma.addEventListener("click", function(){
    odressoOwan.classList.add("hidden");
});


// hidden card-2




const showButtonTow = document.getElementById("donate-now-tow");
const odressoOwanTow = document.getElementById("odresso-owan");
const closeConfirmaTow = document.getElementById("closeConfirmation");

showButtonTow.addEventListener("click", function(){
    odressoOwanTow.classList.remove("hidden");
} );

closeConfirmaTow.addEventListener("click", function(){
    odressoOwanTow.classList.add("hidden");
});






// hidden card-3





const showButtonthere = document.getElementById("donate-now-tehre");
const odressoOwanthere = document.getElementById("odresso-owan");
const closeConfirmathere = document.getElementById("closeConfirmation");

showButtonthere.addEventListener("click", function(){
    odressoOwanthere.classList.remove("hidden");
} );

closeConfirmathere.addEventListener("click", function(){
    odressoOwanthere.classList.add("hidden");
});




// suwal - zawab -start -1 

const suwalZawab = document.getElementById("suwal");
const navver = document.getElementById("navver");
suwalZawab.addEventListener("click", function() {
    window.location.href = "details.html"; 
});




// button stert

// history-tow


const buttonStert = document.getElementById("history-tow");
const historyWon = document.getElementById("history-won");
const baddiYede = document.getElementById("baddiyede");
const chakingTime = document.getElementById("chaking-time");
buttonStert.addEventListener("click", function(){
    buttonStert.classList.add(
        "bg-lime-500",
        "text-black-50",
        
    )

    historyWon.classList.remove(
        "bg-lime-500",
    "text-black-50",
    )

    baddiYede.classList.add("hidden")
    chakingTime.classList.remove("hidden")

})


// history-won



const buttonStert2 = document.getElementById("history-won");
const historyWon2 = document.getElementById("history-tow");
const chakingTime2 = document.getElementById("chaking-time");
const baddiYede2 = document.getElementById("baddiyede");
buttonStert2.addEventListener("click", function(){
    buttonStert2.classList.add(
        "bg-lime-500",
        "text-black-50",
        
    )

    historyWon2.classList.remove(
        "bg-lime-500",
    "text-black-50",
    )



    baddiYede2.classList.remove("hidden")
    chakingTime2.classList.add("hidden")

  

})




// chaking-time





