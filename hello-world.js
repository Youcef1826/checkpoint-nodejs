// Externals imports
import express from "express";
import fs from 'fs';
import { passwordGen } from './password-generator.js';
import { sendEmail } from './email-sender.js';

const app = express();
const port = 3000;

/* 
1- In this task, you will:

Create a file named hello-world.js
Write a program to print "HELLO WORLD" to the console
*/

console.log("HELLO WORLD");

/*
2- In this task, you will:

create a server  
Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000
*/

app.get("/", (req, res) => {
    res.send(`<h1>Hello Node!!!!</h1>\n`);
});

/*
3-  In this task, you will:

First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
Second, create a program that reads and console.log data from hello.txt
 */

// Create and write in file
fs.writeFile("welcome.txt", "Hello node from welcome.txt !!!", (err) => {

    if (err) throw err;
    console.log("File created!");

    // Read and convert data in file
    fs.readFile("welcome.txt", (err, data) => {

        if (err) throw err;

        const convertedData = data.toString();
        console.log(convertedData);
    });
});

/*
4- In this task, you will:

Create a file named "password-generator"  
(use npm install generate-password : (https://www.npmjs.com/package/generate-password)

Create a function that generates random passwords and console.log() that password.
*/

passwordGen();

/*
5-  In this task, you will:

create a file named email-sender  
npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)
*/

sendEmail().catch(console.error);



// Listen
app.listen(port, () => {
    console.log(`Server start at port ${port}`);
});