//Task 1: Create a Customer Class

//Create Properties: name, email, pruchaseHistory
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
      console.log(`New Customer Created: ${this.name} (${this.email})`);
    };

//Add a purchase amount to purchaseHistory
    addPurchase(amount) {
      if (typeof amount === 'number' && amount > 0) {
        this.purchaseHistory.push(amount);
        console.log(`${this.name} made a purchase of $${amount.toFixed(2)}`);
      };
    };
  
//Return total amount spent
getTotalSpent() {
    const total = this.purchaseHistory.reduce((sum, amount) => sum + amount, 0);
    console.log(`Total Spent by ${this.name}: $${total.toFixed(2)}`);
    return total;
    };
  };

//Task 2: Create a SalesRep Class

//Create Properties: name, clients
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
      console.log(`New SalesRep Created: ${this.name}`);
    };
  
//Add a customer to the list
    addClient(customer) {
      if (customer instanceof Customer) {
        this.clients.push(customer);
        console.log(`${customer.name} added to ${this.name}'s client list.`);
      };
    };
  
//Find client by name and returns total spent
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      if (client) {
        const total = client.getTotalSpent();
        console.log(`Total spent by ${client.name}: $${total.toFixed(2)}`);
        return total;
      };
    };
  };

//Task 3: Create a VIPCustomer Class (extends Customer)

//Add Property: vipLevel
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
      console.log(`VIP Customer Created: ${this.name} (${this.vipLevel})`);
    };

//Return total spent with 10% loyalty bonus added
    getTotalSpent() {
        const baseTotal = super.getTotalSpent();
        const bonus = baseTotal * 0.10;
        const totalWithBonus = baseTotal + bonus;
        console.log(`${this.name}'s VIP Total (with 10% bonus): $${totalWithBonus.toFixed(2)}`);
        return totalWithBonus;
      };
    };

//Task 4: Build a Client Report System

//Store multiple customers (regular + VIP) and a sales rep
const customerA = new Customer("Tom Brady", "tom@gmail.com");
customerA.addPurchase(100);
customerA.addPurchase(200);

const customerB = new Customer("Jamis Winston", "jamis@gmail.com");
customerB.addPurchase(400);
customerB.addPurchase(350);

const vipA = new VIPCustomer("Adrian Peterson", "adrian@gmail.com");
vipA.addPurchase(400);
vipA.addPurchase(200);

const vipB = new VIPCustomer("Jaylen Ramsey", "jaylen@gmail.com");
vipB.addPurchase(600);
vipB.addPurchase(350);

const rep = new SalesRep("Geno Smith");
rep.addClient(customerA);
rep.addClient(customerB);
rep.addClient(vipA);
rep.addClient(vipB);

//Calculate total revenue from all customers
const totalRevenue = rep.clients.reduce((sum, client) => sum + client.getTotalSpent(), 0);
console.log(`Total Revenue from All Customers: $${totalRevenue.toFixed(2)}`);

//Find customers who spent over $500
const customersOver500 = rep.clients.filter(client => client.getTotalSpent() > 500);
console.log("Customers Who Spent Over $500:");

//Create an array of customer names and total spent
const clientSummaries = rep.clients.map(client => {
    return {
      name: client.name,
      totalSpent: client.getTotalSpent().toFixed(2)
    };
  });
  console.log("Customer Summaries:", clientSummaries);