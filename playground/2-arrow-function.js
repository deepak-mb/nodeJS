// const square = function (x) {
// 	return x * x;
// }
// console.log(square(3));

// const square = x => x * x;
// console.log(square(3));

const event = {
	name: 'Birthday party',
	guestList: ['Andrew', 'Gen', 'Garry'],
	printGuestList() {
		console.log('Guest list for ' + this.name);
		this.guestList.forEach(guest => {
			console.log(`${guest} is attending the birthday party.`)
		})
	}
};

event.printGuestList();