/* তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। */

var myMoney = 41000;

if (myMoney>80000){
    console.log('I will buy Mac');    
}

else if (myMoney>60000){
    console.log('I will buy Gamming Laptop');    
}

else if (myMoney>40000){
    console.log('I will buy Lenovo Yoga');
}

else if (myMoney>20000){
    console.log('I will buy used laptop');
}

else{
    console.log('I will do with my mobile');
}