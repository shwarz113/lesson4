function getFriendlyNumbers(start, end) {
	if ((typeof(start))==='number' && (typeof(end))==='number' && 
		start<=end && start>0 && end>0 && start%1===0 && end%1===0) {
	arr = [];
	let sum1 = sum2 = 0;
	let devider1 = 0;
	for (let i = start; i <= end; ++i) {
		for (devider1 = 1; devider1 <= Math.round(i/2); ++devider1) {
			if (i % devider1 == 0){
				sum1 += devider1;
			}
		}
		let devider2 = 0;
		for (let l = i+1; l <= end; ++l) {
			if (l == sum1) {
				for (devider2 = 1; devider2 <= Math.round(l/2); ++devider2) {
					if (l % devider2 == 0){
					sum2 += devider2;
					}
				}
				if (i == sum2 && l == sum1) {
					arr.push([i, l]);
				}
			}
		}
		sum1=sum2=0;
	}
    return arr
}
else {
	return false
}
}
console.log(getFriendlyNumbers(1, 1));


module.exports = {
    firstName: 'Nikolay',
    secondName: 'Efimkin',
    task: getFriendlyNumbers
}