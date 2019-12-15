

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
    ]).then(function(response) {
        
        var productChosen = response.productID;
        var amountChosen = response.amount;
        
        console.log('Product Chosen: ', productChosen);
        console.log('Amount Chosen: ', amountChosen); 


        //check if store has enough of product: 
        if (amountChosen > stock_quantity) { 
            console.log('Insufficient quantity of product in stock'); 
        } else if (amountChosen <= stock_quantity) { 
            //upadte sql database:
            
            //log total cost:
            console.log('Your total cost is: ' + amountChosen * price); 
        }
    })

