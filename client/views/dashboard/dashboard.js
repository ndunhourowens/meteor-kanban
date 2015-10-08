Template.dashboard.events({
  // eventname  selector
  'submit #addTaskForm': function(evt, template){ // template is blaze template instance.  blaze is the renedering engine
    evt.preventDefault(); // prevents page from reloading
    Tasks.insert({
        title: evt.target.title.value,
        description: evt.target.description.value,
      });

      title:evt.target.title.value = '';
      description: evt.target.description.value = "";
  },

  // delete button
  '.delete #addTaskForm': function() {
    Tasks.remove(this._id);
  }


});



Template.dashboard.helpers({
  tasks: function(){
    return Tasks.find();
  }
});