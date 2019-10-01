const add = require("./utils.js");
const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.version("1.0.1");

//add, remove, read, list
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler: function() {
    console.log("Removing the note...");
  }
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function() {
    console.log("Reading the note...");
  }
});

yargs.command({
  command: "list",
  describe: "Listing the notes",
  handler: function() {
    console.log("Listing the notes...");
  }
});

yargs.parse();
// console.log(yargs.argv);
