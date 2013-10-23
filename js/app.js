(function() {


  var Task = Backbone.Model.extend({
    defaults: {
      title: "do something!",
      completed: false
    },
    toggle: function(){
      this.set("completed", !this.get("completed"));
    }
  });

  var task1 = new Task({
    title: "do it!",
    completed: true
  });

  task1.set("title", "newTItle!")
  var title = task1.get("title")


  console.log(task1.get("completed"))
  task1.toggle()
  console.log(task1.get("completed"))
  
})();