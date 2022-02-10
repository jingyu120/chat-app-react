Codedamn Projects - Chat Application
header image

Hello developer!
Welcome to Chat Application Project on Codedamn. This is one of the many projects available on codedamn to reinforce your learning by building. If you want to become a full stack developer and learn by practicing, feel free to attempt this challenge. Feel free to check out the codedamn Full Stack Web Development Learning Path to learn more about how to become an awesome full stack developer.

Project Overview
You have to implement chat application where users can

Landing Page
The landing page is similar to that of the register page, so we don't need another landing page for this project

Register
THe registration functionality should be implemented at /register route.

This should contain the students details, refer to the student document for the details to be collected.

register page

Log In
The login functionality should be implemented in the /login route.

login image

API Routes
/api/auth/login
To verify the user credentials on Sign In, taking the parameters as the roll number and the password

/api/auth/register
To register a new student and add the document to the database

/api/messages
To get the previous messages in the conversation. Make sure to pass in the Conversation ID to retrieve the messages

/api/conversations
To list out all the open conversations on the chat application.

MongoDB User document
{
"username" : string,
"email" : string,
"password" : string
}
MongoDB Message document
{
"conversationId" : string,
"sender" : string,
"message" : string
}
Take a look at the mongoose schema to get the perfect Idea.

MongoDb Conversation document
{
"conversationId" : string,
"members" : array
}
Ports
The Codedamn Playgrounds exposes only 1337 and 1338 ports on the internet. So you'll be using localhost for connecting to the mongodb instance as they are hosted on the same docker container. You can specify it as localhost:27017 or simple write localhost.

You have to use the 1338 port for the web socket connection.

You are free to use any third party libraries for the web sockets or any other part of the application.

To understand about web sockets, you can refer to this blog

Recommended Technologies
Mongoose for mongodb object modelling and effective type system
Tailwind CSS for User Interface
Instructions
Your challenge is to build out this project and get it looking as close to the design as possible.

You can use any tools or technologies you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your project should:

Be responsive for desktop and mobile phones
Have minimum functionalities and effects working
Want some support on the challenge? Join our discord community and ask questions in the #general channel.

There is no limit you can go beyond the mentioned criteria and create additional functionalities

Where to find everything
Your task is to build out the project as per the provided screenshots.

The designs are in image formats can be found in /designs.

Send feedback!
We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please visit codedamn feedback page
