/** @format */

let arr = [
	{ id: 1, name: "john", age: "18", profession: "developer" },
	{ id: 2, name: "jack", age: "20", profession: "developer" },
	{ id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
	//Write your code here , just console.log

	let newarr = [];
	arr.map(function (element, index, list) {
		if (element.profession === "developer") {
			// console.log(element);
			newarr.push(element);
		}
	});
	console.log(newarr);

	// arr.map((element) => {
	// 	if (element.profession === "developer") {
	// 		console.log(element);
	// 	}
	// });
}

function PrintDeveloperbyForEach() {
	//Write your code here , just console.log

	let newarr = [];
	arr.forEach(function (element, index, list) {
		if (element.profession === "developer") {
			// console.log(element);
			newarr.push(element);
		}
	});
	console.log(newarr);

	// arr.forEach((element) => {
	// 	if (element.profession === "developer") {
	// 		console.log(element);
	// 	}
	// });
}

function addData() {
	//Write your code here, just console.log
	let obj = {
		id: 4,
		name: "Chris",
		age: "21",
		profession: "developer",
	};

	arr.push(obj);

	console.log(arr);
}

function removeAdmin() {
	//Write your code here, just console.log

	let newarr = arr.filter(function (element, index, list) {
		return element.profession !== "admin";
	});

	arr = [...newarr];
	console.log(arr);
}

function concatenateArray() {
	//Write your code here, just console.log

	let brr = [
		{ id: 8, name: "johnny", age: "19", profession: "admin" },
		{ id: 9, name: "jackie", age: "21", profession: "admin" },
		{ id: 10, name: "kareena", age: "18", profession: "admin" },
	];

	const concatenatedArray = arr.concat(brr);
	console.log(concatenatedArray);
}
