
const numbers = document.querySelectorAll('.number');
const speed = 10; // The lower the slower

numbers.forEach(number => {
	const updateCount = () => {
		const target = +number.getAttribute('data-target'); // + changest the target string to number type 
		const value = +number.innerText;

        const inc = target / speed;

        if(value < target) {
            number.innerText = value + inc;
            setTimeout(updateCount, 100);
        } else {
            value.innerText = target;
        }
                
	};

	updateCount();
});

