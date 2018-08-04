const inquirer = require('inquirer');
const ContactController = require("./ContactController");

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below:",
        choices: [
          "Add new contact",
          "Get current time",
          "Exit"
        ]
      }
    ];
    this.book = new ContactController();
  }

  addContact() {
    this.clear();
    inquirer.prompt(this.book.addContactQuestions).then( (answers) => {
      console.log("Contact added successfully!");
      this.main();
    }).catch( (err) => {
      console.log(err);
      this.main();
    });
  }

  clear() {
    console.log('\x1Bc');
  }

  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getContactCount() {
    return this.contacts.length;
  }

  getTime() {
    var time = new Date();
    console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
  }

  main() {
    console.log('Welcome to AddressBloc!');
    inquirer.prompt(this.mainMenuQuestions).then( response => {
      switch(response.mainMenuChoice) {
        case "Add new contact":
          this.addContact();
          break;
        case "Exit":
          this.exit();
          break;
        case "Get current time":
          this.getTime();
          break;
        default:
          console.log("Invalid input");
          this.main();
      }
    }).catch( err => {
      console.log(err);
    });
  }

  remindMe() {
      return "Learning is a life-long pursuit";
  }

}
