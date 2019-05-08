<h1>360HR</h1>

<h2>Short description</h2>
</br>
The mobile app allows teams to perform 360 tests so the team mates can provide constructive review of peers, managers and other people in their company. The user has to complete the same survey in four regular intervals within a month for every person participating in the evaluation. This allows for continuous feedback.
</br>
The app will utilize a Chart API to visualize the data on the results of their reviews which will make the information easily understandable by the user.
</br>
<h2>MVP</h2>
</br>
Basic authentication in a log in page</br>
Users can input data and image in sign in page</br>
Users can submit their answers to the survey provided to them</br>
Users can see the aggregate results of the survey answered by his/her peers
</br>
<h2>Backlog</h2>
</br>
Token System.</br>
Google Signup / login</br>
Reminder notifications</br>
Check punctuations given.</br>
Get results in the chart by Date/ Position/ ID</br>
Add rounds (new survey).
</br>
<h2>Data Structure</h2>

User { 
Name: String
Department: enum[]
Position: enum []
Id: user_id
         }

Round {
	Surveys: [],
	}

Surveys {
	Evaluator: user_id
Evaluated: user_id
Social skills : { type: Number, max: 5 }
Technical skills:  { type: Number, max: 5 }

Organizational skills: { type: Number, max: 5 }
Leadership: { type: Number, max: 5 }
Motivation level: { type: Number, max: 5 }
Review: String
Date: date
Round: Number
}
}

#User story

Homepage - shows the logo of the product and shows sign up and login options.
SignUp - allows the user to sign up with their personal details and adding a photo to their profile.
Login - allows the user to log in to the app with their user login details.
Main page - shows two options: 1) to answer the 360 of their other peers, 2) to see the results of their own 360 surveys answered by their peers
Survey Page - the user chooses which teammate to review and inputs his/her answers to the survey
Results Page - the user will see the aggregate results of the survey answered by his peers. Data will be visualized through a chart and it will show the text answers.
Log-out - the user will be able to log out and will no longer be able to access the data or answer the survey.
Error 404 - So the user gets an error when the page does not exist. 
Error 500 - This error prompts when the there is a technical issue with the server.

##Routes

| GET  | /     | Main page route. Login and sign up options
| GET  | /login | Login route. Renders login formulary view
| POST | /login | Login route. Sends login formulary info to the server
| GET | /signup | Signup route. Renders signup formulary view
| POST | /signup | Signup route. Sends signup info to server and creates user in DB
| GET | /profile/:userId | Profile route. Renders profile view
| GET | /directory | Answer survey option and view profile option
| GET | /survey | Renders survey formulary view
| POST | /survey | Sends survey info to server
| GET | /survey/success | Renders success on submission
| GET | /results | Renders the aggregate data with charts and HTML
| GET | /results/details | To search for specific results.

##Technologies

DataBase: Json Server, Postman, Mongo,
Password: zxcvbn, bcrypt
Display: Handlebars, Chart, Axios, Cloudinary/ Cloudinary Storage/ Muster

##Tasks

Generate seed.js file.
Link it with Json Server and PostMan.
Create main hbs files and link them.
CSS.


Links

Github: https://github.com/EricCapdevila/Ironhack-Project-360.
Slides:
Kanban: https://trello.com/b/JwAyVhUb/kanban-board




