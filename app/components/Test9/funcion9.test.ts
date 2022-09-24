const factorization = require('./funcion9');


    var number = 10
    var i
	var total = 1; 
	for (i=1; i<=number; i++) {
		total = total * i; 
	}

test('factorial result', () => {
    expect(total).toEqual(3628800);
    console.log(total)
})