/* Question :   There are two gymnastics teams, Dolphins and Koalas. They compete against each
                other 3 times. The winner with the highest average score wins a trophy!
 Tasks:
                1. Calculate the average score for each team, using the test data below
                2. Compare the team's average scores to determine the winner of the competition,
                and print it to the console. Don't forget that there can be a draw, so test for that
                as well.
                3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
                team only wins if it has a higher score than the other team, and the same time a
                score of at least 100 points. 
                4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
                both teams have the same score and both have a score greater or equal 100
                points. Otherwise, no team wins the trophy.
Test data:
                § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
                § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
                § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

//Solution:

// data 1:

const scoreDolphins = (96 + 108 + 89) / 3;

const scoreKoalas = (88 + 91 + 110) / 3;

console.log(`average of dolphin team is: ${scoreDolphins}`);

console.log(`average of koalas team is: ${scoreKoalas}`);

if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {

    console.log("dolphin win the trophy 🏆");

} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {

    console.log("koalas win the trophy 🏆 ");

} else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {

    console.log("both win the trophy 🏆");
} else {

    console.log("No one wins the trophy")

};

// Data 2:

const scoreDolphins2 = (97 + 112 + 101) / 3;

const scoreKoalas2 = (109 + 95 + 123) / 3;

console.log(`average of dolphin team is: ${scoreDolphins2}`);

console.log(`average of koalas team is: ${scoreKoalas2}`);

if (scoreDolphins2 >= 100 && scoreDolphins2 > scoreKoalas2) {

    console.log("dolphin win the trophy 🏆");

} else if (scoreKoalas2 >= 100 && scoreKoalas2 > scoreDolphins2) {

    console.log("koalas win the trophy 🏆 ");

} else if (scoreKoalas2 === scoreDolphins2 && scoreDolphins2 >= 100 && scoreKoalas2 >= 100) {

    console.log("both win the trophy 🏆");
} else {

    console.log("No one wins the trophy");

};

// Data 3:

const scoreDolphins3 = (97 + 112 + 101) / 3;

const scoreKoalas3 = (109 + 95 + 106) / 3;

console.log(`average of dolphin team is: ${scoreDolphins3}`);

console.log(`average of koalas team is: ${scoreKoalas3}`);

if (scoreDolphins3 >= 100 && scoreDolphins3 > scoreKoalas3) {

    console.log("dolphin win the trophy 🏆");

} else if (scoreKoalas3 >= 100 && scoreKoalas3 > scoreDolphins3) {

    console.log("koalas win the trophy 🏆 ");

} else if (scoreKoalas3 === scoreDolphins3 && scoreDolphins3 >= 100 && scoreKoalas3 >= 100) {

    console.log("both win the trophy 🏆");
} else {

    console.log("No one wins the trophy");

};