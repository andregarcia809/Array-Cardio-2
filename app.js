// ## Array Cardio Day 2

const people = [{
    name: 'Dre',
    year: 1985
  },
  {
    name: 'Naila',
    year: 1989
  },
  {
    name: 'Celenia',
    year: 1968
  },
  {
    name: 'Nathalia',
    year: 2017
  }
];

const comments = [{
    text: 'Love this!',
    id: 523423
  },
  {
    text: 'Super good',
    id: 823423
  },
  {
    text: 'Your are the best',
    id: 2039842
  },
  {
    text: 'Chineese is my favorite food ever',
    id: 542328
  }
];

// Some() and Every() Checks
// Array.prototype.some() // is at least one person 19?
const person1 = people.some( person =>
  ((new Date()).getFullYear()) -person.year >= 19);

console.log(person1);

 // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    const comment = comments.find( comment => comment.id === 823423);

    console.log(comment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    const   DeleteComment = comments.findIndex( comment => comment.id === 823423)
      comments.splice(DeleteComment, 1)

    console.log(DeleteComment);
