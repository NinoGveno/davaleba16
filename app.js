function squareNumber(number) {
    return number * number;
  }
function applyDiscount(initialPrice, discountPercentage) {
    const discountAmount = initialPrice * (discountPercentage / 100);
    const finalPrice = initialPrice - discountAmount;
    return finalPrice;
  } 
function generateRandomNumber() {
    return Math.floor(Math.random() * 101);
  }
function getStringLength(string) {
    return string.length;
  }
  const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
]; 
function square(number) {
    return number * number;
  } 
  function calculateDiscountedPrice(initialPrice, discountPercentage) {
    const discountAmount = initialPrice * (discountPercentage / 100);
    const discountedPrice = initialPrice - discountAmount;
    return discountedPrice;
  } 
  function getRandomNumber() {
    const randomNumber = Math.random() * 100;
    const roundedNumber = Math.floor(randomNumber);
    return roundedNumber;
  }
  function getStringLength(string) {
    return string.length;
  }
  const squaredNumber = square(5);
console.log(squaredNumber);

const discountedPrice = calculateDiscountedPrice(1000, 10);
console.log(discountedPrice);

const randomNumber = getRandomNumber();
console.log(randomNumber); 

const stringLength = getStringLength("Hello, World!");
console.log(stringLength);
