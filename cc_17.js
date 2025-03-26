//Task 1: Create a Customer Class

//Create Properties: name, email, pruchaseHistory
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
    }

//Add a purchase amount to purchaseHistory
    addPurchase(amount) {
      if (typeof amount === 'number' && amount > 0) {
        this.purchaseHistory.push(amount);
      }
    }
  
//Return total amount spent
    getTotalSpent() {
      return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
  }
