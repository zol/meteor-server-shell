var shell = Npm.require('shelljs');

Meteor.methods({
  "ServerShell/execute": function(command) {
    check(command, String);

    if (command.indexOf("cd ") === 0) {
      shell.cd(command.replace(/^cd /, ""));
      return process.cwd();
    } else {
      var result = shell.exec(command, {silent:false});
      return result.output;
    }
  }
})