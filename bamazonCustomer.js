

// //prompt users with messages: 
    // Ask them the ID of the product they would like to buy.
    // How many units of the product they would like to buy.

//load npm package inquirer: 
var inquirer = require('inquirer'); 

//prompt users: 1) ask for ID of product, 2) how many units they'd like to buy: 
inquirer
    .prompt([
        {
            type: 'list', 
            message: 'Which product would you like to buy?', 
            choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 
            name: 'productID' 
        }, 
        {
            type: 'input', 
            message: 'How many would you like to buy?',
            name: 'amount'
        }
    ])
    .then(function(response) { 
        if ()
    })

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

