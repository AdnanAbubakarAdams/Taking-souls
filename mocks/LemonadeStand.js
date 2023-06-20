// At a lemonade stand, each lemonade costs $5.

// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

// Return true if and only if you can provide every customer with correct change.

// EXAMPLES

// [5, 5, 5, 10, 20] -> true
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// [5, 5, 10] -> true
// We collect two $5 bills from the first two customers and give one back as change to the last customer.

// [10, 10] -> false
// The first customer needs $5 back in change, but we don't have any five dollar bills.

// [5, 5, 10, 10, 20] -> false
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can't give change of $15 back because we only have two $10 bills.
// Since not every customer received correct change, the answer is false.

const getTheRightBalanceForCustomers = (bills) => {
    // declare variables to store your bills
    let count5Bills = 0;
    let count10Bills = 0;

    // loop through the array of bills
    for (let bill of bills) {
        // set conditions to check if the bill from cust === 5 add increase the 5 bills
        if (bill === 5) {
            count5Bills++;
            // condition if the bill === 10, increase of add the 10bill and decrease the 5 bill as change
        } else if (bill === 10) {
            count10Bills ++;
            count5Bills --;
            // condition if bill === 20, we check if we have 10 bills and also 5 bills
        } else if (bill === 20) {
            if (count10Bills > 0 && count5Bills >= 1) {
                // we decrease 5 bill and decrease 10 bill
                count10Bills--;
                count5Bills--;
                // else we decrease 5 bills by 3
            } else {
                count5Bills -= 3;
            }
        }
    }
    // if 5 bills is less than zero return false 
    if (count5Bills <= 0) {
        return false;
        // else rreturn true
    } else {
        return true
    }
};
console.log(getTheRightBalanceForCustomers([5, 5, 5, 10, 20])) // true 
console.log(getTheRightBalanceForCustomers([5, 5, 10])) // true 
console.log(getTheRightBalanceForCustomers([5, 5, 10, 10, 20])) // false