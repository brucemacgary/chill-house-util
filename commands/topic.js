const Discord = require('discord.js');

module.exports = {
    name: 'topic',
    description: 'suggest me what should i write here',
    execute(client, message, args){

var facts = [
    "What do you like to do on a rainy day?",
    "Do you follow your heart or your head?",
    "What is the best part of your day?",
    "Would you rather go without junk food for a year or go without TV for a year?",
    "If you could choose any era to live in, what would it be?",
"Is it better to work at a job that you love or a job that pays well?",
"What is the worst movie that you\'ve seen?",
"What is your favorite thing about summer?",
"Would you rather be the most popular kid in school or the smartest kid in school?",
"If you won $1 million playing the lottery, what would you do?",
"If you knew that you only had a year left to live, what would you do?",
"Describe your perfect day.",
"How did you get your name? Do you know the meaning of your name?",
"If you could meet anybody in history, past or present, who would it be?",
"Do you play any sports?",
    "Isn\'t this server awesome?"
];


 var fact = Math.floor(Math.random() * facts.length);
         message.channel.send(facts[fact]);


}};
