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
Name: String</br>
Department: enum[]</br>
Position: enum []</br>
Id: user_id</br>
         }</br>

Round {</br>
	Surveys: [],</br>
	}</br>

Surveys {</br>
	Evaluator: user_id</br>
Evaluated: user_id</br>
Social skills : { type: Number, max: 5 }</br>
Technical skills:  { type: Number, max: 5 }</br>
Organizational skills: { type: Number, max: 5 }</br>
Leadership: { type: Number, max: 5 }</br>
Motivation level: { type: Number, max: 5 }</br>
Review: String</br>
Date: date</br>
Round: Number</br>
}</br>
}</br>

<h2>User story</h2>
</br>
Homepage - shows the logo of the product and shows sign up and login options.</br>
SignUp - allows the user to sign up with their personal details and adding a photo to their profile.</br>
Login - allows the user to log in to the app with their user login details.</br>
Main page - shows two options: 1) to answer the 360 of their other peers, 2) to see the results of their own 360 surveys answered by their peers</br>
Survey Page - the user chooses which teammate to review and inputs his/her answers to the survey</br>
Results Page - the user will see the aggregate results of the survey answered by his peers. Data will be visualized through a chart and it will show the text answers.</br>
Log-out - the user will be able to log out and will no longer be able to access the data or answer the survey.</br>
Error 404 - So the user gets an error when the page does not exist. </br>
Error 500 - This error prompts when the there is a technical issue with the server.</br>

<h2>Routes</h2>
</br>
| GET  | /     | Main page route. Login and sign up options</br>
| GET  | /login | Login route. Renders login formulary view</br>
| POST | /login | Login route. Sends login formulary info to the server</br>
| GET | /signup | Signup route. Renders signup formulary view</br>
| POST | /signup | Signup route. Sends signup info to server and creates user in DB</br>
| GET | /profile/:userId | Profile route. Renders profile view</br>
| GET | /directory | Answer survey option and view profile option</br>
| GET | /survey | Renders survey formulary view</br>
| POST | /survey | Sends survey info to server</br>
| GET | /survey/success | Renders success on submission</br>
| GET | /results | Renders the aggregate data with charts and HTML</br>
| GET | /results/details | To search for specific results.</br>

<h2>Technologies</h2>
</br>
DataBase: Json Server, Postman, Mongo,</br>
Password: zxcvbn, bcrypt</br>
Display: Handlebars, Chart, Axios, Cloudinary/ Cloudinary Storage/ Muster</br>

<h2>Tasks</h2>

Generate seed.js file.</br>
Link it with Json Server and PostMan.</br>
Create main hbs files and link them.</br>
CSS.</br>
...</br>

<h2>Links</h2>

Github: https://github.com/EricCapdevila/Ironhack-Project-360.</br>
Slides:</br>
Kanban: https://trello.com/b/JwAyVhUb/kanban-board</br>




