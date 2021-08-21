
let totalAmount = document.getElementById('total-amount');
let finalAmount = document.getElementById('total-price');

          // add More Configure

        //   Add Memory Cost 
document.getElementById('default-memory').addEventListener('click',function(){
    document.getElementById('memory-amount').innerText= "0";
    calc();
});
document.getElementById('extra-memory').addEventListener('click',function(){
    document.getElementById('memory-amount').innerText = "180";
    calc();
});
    
        //   Add Storage Cost  
document.getElementById('default-ssd').addEventListener('click',function(){
    document.getElementById('storage-amount').innerText = "0";
    calc();
});
document.getElementById('extra-ssd').addEventListener('click',function(){
    document.getElementById('storage-amount').innerText = "100";
    calc();
});
document.getElementById('more-extra-ssd').addEventListener('click',function(){
    document.getElementById('storage-amount').innerText = "180";
    calc();
});

        //  Add  Delivery Cost
document.getElementById('delivery-free').addEventListener('click',function(){
    document.getElementById('charge-amount').innerText = "0";
    calc();
});
document.getElementById('delivery-charge').addEventListener('click',function(){
    document.getElementById('charge-amount').innerText = "20";
    calc();
});
           //Function For Calculated Total Amount
function calc(){
    const memoryAmount = document.getElementById('memory-amount').innerText;
    const storageAmount =  document.getElementById('storage-amount').innerText;
    const deliverAmount = document.getElementById('charge-amount').innerText;
    totalAmount.innerText = 1299 + parseInt(memoryAmount) + parseInt(storageAmount) + parseInt(deliverAmount);
    finalAmount.innerText = 1299 + parseInt(memoryAmount) + parseInt(storageAmount) + parseInt(deliverAmount);
    discoundPromocode();
};


                // Fuction For Using Cupon Code
const discounInput = document.getElementById('discount-input');

function discoundPromocode(promoCode){
    document.getElementById(promoCode).addEventListener('click',function(){
        if(discounInput.value == 'stevekaku'){
            const discount = parseInt(totalAmount.innerText) - parseInt(totalAmount.innerText) * .2;
            finalAmount.innerText = discount;

        }
        else{
            alert('Discount Cupon Not Exist')
        }
        discounInput.value = '';
    })
}
discoundPromocode('discount');
