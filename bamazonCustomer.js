

// //prompt users with messages: 
    // Ask them the ID of the product they would like to buy.
    // How many units of the product they would like to buy.

//load npm package inquirer: 
var inquirer = require('inquirer'); 

//require sql: 
const mysql = require('mysql'); 

//connect to mysql: 

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306', 
    user: 'root',
    password: 'root',
    database: 'bamazon'
})

connection.connect(function(err){ 
    if(err) throw err; 
    console.log('connection as id' + connection.threadId); 
    connection.query('SELECT * FROM products', function(err, res) {
        console.log('res', res); 
    allowInquirer(); 
    })
})


// //prompt users: 1) ask for ID of product, 2) how many units they'd like to buy: 
var allowInquirer = function() { 

    inquirer
        .prompt([
            {
                type: 'list', 
                message: 'Which product would you like to buy?', 
                choices: ['1. Dress', '2. Pants', '3. Computer', '4. Socks', '5. Heals', '6. Tote Bag', '7. Shirt', '8. Skirt', '9. Necklace', '10. Earings'], 
                name: 'productID' 
            }, 
            {
                type: 'input', 
                message: 'How many would you like to buy?',
                name: 'amount'
            }
        ])
        .then(function(response) {
            
            var productChosen = response.productID;
            var amountChosen = response.amount;
            
            console.log('Product Chosen: ', productChosen);
            console.log('Amount Chosen: ', amountChosen); 
        });
};
    


    //     //check if store has enough of product: 
    //     if (amountChosen > stock_quantity) { 
    //         console.log('Insufficient quantity of product in stock'); 
    //     } else if (amountChosen <= stock_quantity) { 
    //         //upadte sql database:
            
    //         //log total cost:
    //         console.log('Your total cost is: ' + amountChosen * price); 
    //     }
    // })
    // ]);


