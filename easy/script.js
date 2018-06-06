let money,
	name,
	time,
	price;

function start() {
	money = prompt("Ваш бюджет на месяц?", '');

	while ((isNaN(money)) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?", '');
	}
	name = prompt("Название вашего магазина?", 'Foxbone');
	time = 21;
}

start();

mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; ) {

			let a = prompt("Какой тип товаров будем продавать?", '');
			
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
				i++;
			} else {
				alert("Введите правильное значение!");
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого просто не может быть');
			} else if (time > 8 && time < 22) {
				console.log('Время работать!');
				mainList.open = true;
				} else if (time < 24) {
					console.log('Уже слишком поздно');
					} else {
						console.log('В сутках только 24 часа!');
						}
	},
	calcBudget: function calcBudget (money) {
		console.log(money/30)
	},
	discountPrice: function discountPrice (price) {
		mainList.discount?console.log(price*=0.8):console.log(price);
	},
	employment: function employment () {
		let nameMan;
		for (let i = 0; i < 4; i++) {
			nameMan = prompt('Введите имя ' + (i+1) + 'сотрудника: ', '');
			if ((typeof(nameMan)) === 'string' && (typeof(nameMan)) != null && nameMan != '' && nameMan.length < 50) {
				mainList.employers[i] = (i+1) + ' - ' + nameMan;
				} else {
					i--;
				}
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt('Перечислите через запятую ваши товары', '');
		while ((typeof(items)) != 'string' || (typeof(items)) === null || items == '') {
			items = prompt('Перечислите через запятую ваши товары', '');
		}
		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Подождите, еще  ', ''));
		mainList.shopItems.sort();

		mainList.shopItems.forEach(function(item, i, shopItems) {
			alert('У нас вы можете купить: ' + (i+1) + '. ' + item);
		});

		console.log('Наш магазин включает в себя: ');
		for (let key in mainList.shopItems){
			console.log(mainList.shopItems[key]);
		}
	}
}