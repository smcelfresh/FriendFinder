// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},

{
  "name":"George Clooney",
  "photo":"https://www.google.com/imgres?imgurl=https://upload.wikimedia.org/wikipedia/commons/8/8d/George_Clooney_2016.jpg&imgrefurl=https://en.wikipedia.org/wiki/George_Clooney&h=519&w=402&tbnid=SmDHgU1WKrfrAM:&tbnh=186&tbnw=144&usg=__OtwYUdVWAWhGECQBVjRjqZ7tTew%3D&vet=10ahUKEwjjhJe_4c7ZAhVLHqwKHZG-D7oQ_B0ImwIwGA..i&docid=E4xkyfV-J0OkeM&itg=1&sa=X&ved=0ahUKEwjjhJe_4c7ZAhVLHqwKHZG-D7oQ_B0ImwIwGA",
  "scores":[
      5,
      4,
      4,
      4,
      5,
      4,
      4,
      5,
      4,
      1
    ]
},

{
  "name":"Kim Kardashian",
  "photo":"https://www.google.com/imgres?imgurl=https://pbs.twimg.com/profile_images/875432723837362176/j5NOs7Dj_400x400.jpg&imgrefurl=https://twitter.com/kimkardashian&h=400&w=400&tbnid=BT3jZKFF8bm3pM:&tbnh=186&tbnw=186&usg=__6V7s0SihhNWDfCI7cbtb92mAR-c%3D&vet=10ahUKEwjBjPCe4c7ZAhVMEawKHWyZA8EQ_B0I4QEwGw..i&docid=tTTszQb9CH1WeM&itg=1&sa=X&ved=0ahUKEwjBjPCe4c7ZAhVMEawKHWyZA8EQ_B0I4QEwGw",
  "scores":[
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ]
}
];

// export the array. This makes it accessible to other files using require.
module.exports = friends;