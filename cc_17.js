//Task 1: Create a Customer Class

//Create Properties: name, email, pruchaseHistory
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
    };

//Add a purchase amount to purchaseHistory
    addPurchase(amount) {
      if (typeof amount === 'number' && amount > 0) {
        this.purchaseHistory.push(amount);
      };
    };
  
//Return total amount spent
    getTotalSpent() {
      return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    };
  };

//Task 2: Create a SalesRep Class

////Create Properties: name, clients
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    };
  
//Add a customer to the list
    addClient(customer) {
      if (customer instanceof Customer) {
        this.clients.push(customer);
      };
    };
  
//Find client by name and returns total spent
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      if (client) {
        const total = client.getTotalSpent();
      };
    };
  };
