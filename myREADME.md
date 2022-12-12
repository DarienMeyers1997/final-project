Killer Pizza - A pizza site where you can call or order online, and submit a job application
Common usage across each page:
bootstrap is used on each page
bloody font is used in the index and order online sections but not job-application(for professionalism)

HTML Portion

Function:

The index is the main page of the site.

You can look at the menu and use the number on the page to place an order via call

You can also click the links taking you to two different sub pages.

Link One, order-online.html:
Takes you to the order online portion of the site allowing you to choose specialty pies and a customizable pie
After submitting your order an alert pops up detailing a list of the items you ordered and giving a total

Link Two, job-application.html:
Allows the user to submit a apply for a job at Killer Pizza

index.html Details -
a <div> container with id = "container" holds all content. Inside <div> container:

a <div> with class = "header" is the "head" of the page. Inside <div> header:
Title of site<h1>KILLER PIZZA<h1>
2 bootstrap cards using danger red, with warning yellow buttons, with links to each sub page of the sight

Link One, order-online.html Details -
a <div> with id = "online-order-container" holds all order online content. I used a bootsrap background color called "bg-warning" for the entire page. Inside <div> container:

a <div> with class = "box-head" holds <h1>Killer Pizza<h1>. (side note. I wanted a carrousel but couldn't get it to work)
After <div> boxhead ends

a <form> with id = "box-body" contains divs using <labels> and <inputs> for selecting specialty pizzas and a section for a custom pie.
At the very bottom of the page is a submit button that when clicked pops up an alert detailing a list of items and the users total

Link Two, job-application.html:
Allows the user to submit a apply for a job at Killer Pizza
I kept it very basic with the job application.
I created a <div> with the id = "job-container" which holds all content for page. Inside <div> container
I created a Personal info section that asks general queations about the user.
An Employee Queastion section that asks general queastions refering to the job
A Resume section with an <input> type="file so the user can upload a their resume.
I used bootstrap radio buttons and borders instead of css for the page and change the Titles to danger red
Issues: I couldn't figure out how to shorten the bootsrap borders.

CSS Portion

index.html Details -
for the <body> i used antiquewhite for the background color
for the font I sourced a bloody font from https://www.cdnfonts.com/bloody.font
for <h1>Killer Pizza<h1> I used margin-top, and -left to center it and changed the fontsize to 100px, and color to red.
for the bootstrap cards I used marin-top and -left to center it as best I could, canged the button colors to warning yellow, and sourced the pictures from google images.
I used an <a> to link the html sub pages to the butttons

order-online Details
I used the bloody font for the font style for the entire page, same for the font color which is cadetblue
The section titles are cadet blue as well execptKiller Pizza which is red.
All font size is 30px, all borders are red with a width of 300px, border of 2px, and radius of 12px. The radius is what curves the borders instead of being sqaured of

JS Portion

Box-Body Details -
quearySelector (#box-body)
quearySelectorAll (#box-body , .ingredients) to access all items with class = "ingredients" inside box box-body tag
quearySelector(.submitOrder) for submit button

I made an addEventListener for box-body for the submit button. inside the event listener function i created an empty string to hold the selected items called newStr. I put newStr inside a for loop stating that if item of ingredients checked, add it to new string.
Then I console.log(newStr) and alerter to show the user the items selected.
I then put that addEventListener in a function called totalPrice and created two new variables. One for price which I set to 0.0 and two called checkboxes which I used the get .ingredients by elementID. I then added price to the alerter string.

(I was unable to succeed in making this fully functional) Issues: The alerter pops up for each section checked and either shows NaN, adds the price after each alerter pop up.
