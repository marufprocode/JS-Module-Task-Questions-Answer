/* 1.গ্রেড  মেকিং  এর  বাকি  অংশটুকু  করে  ফেলতে  হবে  নিজে  নিজে 

২. এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড় 
৩. একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো 

৪.এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ?

৫. ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো 

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

৬.উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

৭. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে 

8. উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো  */


//2 Solve
/* var number = 12;

if (number % 2 === 0){
    console.log(number, 'This number is Even');    
}
else {
    console.log(number, 'This number is Odd');
    
} */

//3 Solve ekhono hoi nai

/* var numbers = [4, 1, 2, 3, 8, 4, 5, 6, 7]

for (var i=0; i<numbers.length; i++){
    numbers[i] = i;

    console.log(numbers);
    
} */


//4 Solution
/* var year = 2000;
if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0 )
		{
            console.log(year+" is a leap year");
		}
		else
		{
			console.log(year+" is not a leap year");
		} */

//5 solution

/* for (var i=1; i<=50; i++){
	if(i % 3 === 0 && i % 5 ===0){
		console.log(i);
		
	}
} */

// 6 find the biggest number of an array

/* var friends = ["rahim", "karim", "abdul", "saad", "heroAlom"];

var longName = friends[0];

for (var i=0; i<friends.length; i++){

	element = friends[i];
	if (element.length>longName.length){
		longName = element
	}
}
console.log(longName); */

//7 find the unique numbers
/* var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var uniqueNum = [];

for (var i=0; i<numbers.length; i++){

	element = numbers[i];
	if(uniqueNum.indexOf(element)== -1){
		uniqueNum.push(element);
	}
}
console.log(uniqueNum); */

//8 find the largest num
/* var numbers = [1, 2, 3, 3, 4, 4, 20, 5, 6, 7, 30, 8, 9, 10];

var largest = [1];

for (var i=0; i<numbers.length; i++){

	if(numbers[i]>largest){
		largest = numbers[i];
	}
}
console.log(largest); */

//--------------------------------------------------------

//3 Get sequencial numbers from random array

/* var numbers = [2, 7, 1, 8];
numbers.sort();
console.log(numbers); */


// ---------------------------------------------------------
/* const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
const citrus = fruits.indexOf('Apple');

console.log(citrus);
console.log(fruits); */



