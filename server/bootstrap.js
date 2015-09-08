// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no polls available create sample data
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        question: 'What\'s your favorite coding language?',
        choices: [
          { text: 'Javascript', votes: 0 },
          { text: 'Ruby', votes: 0 },
          { text: 'Python', votes: 0 }
        ]
      },
      {
        question: 'Favorite condiment on the 12th floor?',
        choices: [
          { text: 'Peanut butter', votes: 0 },
          { text: 'Jelly', votes: 0 },
          { text: 'Nutella', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });

  }

});

if (Meteor.isServer) {
  Meteor.startup(function() {
    return Meteor.methods({
      removeAllPolls: function() {
        return Polls.remove({});
      }
    });
  });
}
