# Friend Finder - Node and Express Servers

Objectives
(Similar to a dating app, the application will take in results from users' surveys then compare their results against all other users who have completed it. The application will then display the name and picture of the user with the best match overall.

Using Express to handle routing and deploy the application on Heroku so others can fill it out.

For a demo of this application see: https://friend-finder.herokuapp.com/

The survey will have 10 questions. Answers to the survey questions are on a scale of 1-5 based on how much the user agrees or disagrees.

Your server.js file should use the basic npm packages we've used in class: express, body-parser, path.

Your html-routes.js file should include two routes:

A GET Route to /survey which should display the survey page.
A default USE route that leads to home.html which displays the home page.
Your api-routes.js file should include two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
Data in your application should be

Saved as an array of objects.

Each object should follow roughly the below format:

 {
   "name":"Ahmed",
   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
   "scores":[
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
 }
Compatibility should be determined based on the following.

Each user's results should be converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
You will then compare the difference between the user's scores against other users' scores, question by question. You will then add up the differences to calculate the totalDifference.
Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5
Remember to use the absolute value of the differences (i.e 5-3 and 3-5 should both be 2).
The person with the closest match should be the one with the "least" amount of difference.
Once you've determined the closest match, display the result back to the user in the form of a modal pop-up.

The result should display both the name and picture of the closest match.

