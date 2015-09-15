Template.ServerShell.created = function() {
  this.output = new Mongo.Collection(null);
  this.output.insert({text: "welcome\n"});
}

Template.ServerShell.helpers({
  allText: function() {
    return Template.instance().output.find();
  }
});

Template.ServerShell.events({
  "submit form": function(event, template) {
    event.stopPropagation();
    event.preventDefault();

    var $input = $(event.target).find("input");
    var $textarea = $(event.target).find("textarea");
    var command = $input.val();
    $input.val("");

    Meteor.call("ServerShell/execute", command, function(error, result) {
      if (error) {
        alert(error);
      } else {
        template.output.insert({text: result + "\n"});
        Tracker.afterFlush(function() {
          $textarea.scrollTop($textarea[0].scrollHeight);
        });
      }
    });
  }
})