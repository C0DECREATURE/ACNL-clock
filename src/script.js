const ACNLclock = {
	loadCSS: ()=> {
	},
	// set up the clock
	init: ()=> {
		// insert the style sheet
		ACNLclock.src = document.getElementById('ACNLclock-script').src.replace('ACNLclock/script.js','');
		let css = document.createElement('link');
		css.rel = 'stylesheet';
		css.type = 'text/css';
		css.href = `${ACNLclock.src}/ACNLclock/style.css`;
		document.querySelector('HEAD').appendChild(css);
		// get the element that holds the clock and insert content
		let clockbox = document.getElementById('ACNLclock');
		clockbox.innerHTML = `
			<img src="${ACNLclock.src}/ACNLclock/acnl_clock.svg" alt="">
			<div class="date"><div class="month">0</div><span>/</span><div class="day">0</div></div>
			<div class="weekday"></div>
			<div class="time"><div class="hour">0</div><span>:</span><div class="minute">00</div></div>
			<div class="ampm"></div>
		`;
		// assign the clock's child elements to variables
		ACNLclock.monthbox = clockbox.querySelector('.month');
		ACNLclock.daybox = clockbox.querySelector('.day');
		ACNLclock.hourbox = clockbox.querySelector('.hour');
		ACNLclock.minutebox = clockbox.querySelector('.minute');
		weekdaybox = clockbox.querySelector('.weekday');
		ACNLclock.ampmbox = clockbox.querySelector('.ampm');
		ACNLclock.update();
	},
	// update the clock time to the current time
	update: ()=>{
		let date = new Date();
		ACNLclock.monthbox.innerHTML = date.getMonth() + 1;
		ACNLclock.daybox.innerHTML = date.getDate();
		weekdaybox.innerHTML = ACNLclock.dayNames[date.getDay()];
		let hours = date.getHours();
		ACNLclock.hourbox.innerHTML = hours >= 12 ? hours - 12 : hours;
		let minutes = date.getMinutes().toString();
		ACNLclock.minutebox.innerHTML = minutes.length < 2 ? '0' + minutes : minutes;
		ACNLclock.ampmbox.innerHTML = date.getHours() >= 12 ? 'pm' : 'am';
	},
	// names for the days of the week
	dayNames: [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ]
}

window.addEventListener('load', ()=>{ ACNLclock.init(); });