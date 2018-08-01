const inquirer = require('inquirer');

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
    this.contacts = [];
  }

  addContact() {
    this.clear();
    console.log('addContact called');
    this.main();
  }

  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
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

  clear() {
    console.log('\x1Bc');
  }
}
