# bamazonCustomer.js
## By Danielle Neubauer 

### What does this do? :hear_no_evil:
This app is an Amazon-like storefront which takes orders from the user, calculates the total price of the products in stock and updates the remaining number of products. 

View the link below to see how it works. 

## App Demo Link: 
<https://drive.google.com/file/d/15MD-YR0Ntv-Gwiq3RGCQBLDyRblmhFTJ/view>

<img src='/Video of flow/screenshotofvid.png' width=500>

## Screen shot of the updated mysql:
<img src="/Video of flow/MySQLscreenshot.png" width=500>


### About the app: :see_no_evil:

This is the first Node & MySQL assignment of the UC Berkeley Coding BootCamp. The goal of this assignment was to practice building databases and accessing them through the server to read & modify them (delete/modify/add data, etc.). 

### Programs & technology used: :speak_no_evil:

The program languaged used to build this application is Javascript. To allow for Javascript to run in the server, I used Node.js and npm packages such as: 

* inquirer 
* mysql. 

The inquirer package allows for the user to communicate with the server and inquire about which product they are interested in and how much of the product they would like to purchase. After the inquiry, the mysql package, allows us to read the data from mysql, display it and modify it accordingly. 