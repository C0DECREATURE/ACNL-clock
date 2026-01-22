## Simple ACNL Clock Widget

![Clock Preview]()

A simple Javascript and CSS clock in the style of Animal Crossing: New Leaf.

## Instructions

1. Download the files.

2. Put the ACNLclock folder anywhere on your website.

3. Add this line in the header of your HTML file, replacing "pathname" with the path where you put the folder:

``` html
<script id="ACNLclock-script" src="pathname/ACNLclock/script.min.js"></script>
```

4. Add this line in the body of your HTML file wherever you want to place the clock:

``` html
<div id="ACNLclock"></div>
```

5. Done!

## CSS Styling

To set the width of the clock, add this line into your page's CSS style. Note that you cannot use percentage values or it will break the layout.

``` css
#ACNLclock { --clock-width: 500px; /* Change this to set the size of the Animal Crossing clock. */ }
```

To style the individual clock elements, you can either modify the source code directly or add this into your page's CSS style.

``` css
#ACNLclock {
	.date { /* Styling for the month and day section */ }
	.month { /* Styling for the month only */ }
	.month { /* Styling for the day only */ }
	.weekday { /* Styling for the day of the week */ }
	.time { /* Styling for the hour and minute section */ }
	.hour { /* Styling for the hour only */ }
	.minute { /* Styling for the minute only */ }
	.ampm { /* Styling for the AM/PM label */ }
}
```