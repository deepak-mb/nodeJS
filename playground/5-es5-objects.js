//Object shorthand
const name = 'Deepak';
const userAge = 30;

const user = {
	name,
	age: userAge,
	location: 'Bangalore'
}

console.log(user);

//Object destructuring
const product = {
	label: "Red notebook",
	price: 3,
	stock: 201,
	salePrice: undefined
};

// const { label: productLabel, price, stock, salePrice, rating = 5 } = product;

// console.log(productLabel, rating)

const transaction = (type, { label, stock }) => {
	console.log(type, label, stock)
}

transaction('order', product);
