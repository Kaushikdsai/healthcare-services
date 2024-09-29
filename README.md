Healthcare Services Management
This is a simple React web application that allows users to manage and display a list of healthcare services. Users can add, update, and delete services from the list.

Features
Service List: Displays a list of healthcare services with name, description, and price.
Add Service: Allows users to add a new healthcare service.
Update Service: Allows users to edit an existing healthcare service.
Delete Service: Users can delete any healthcare service from the list.
State Management: Implemented using React Hooks (useState, useEffect).
Form Validation: Ensures that all fields are filled before adding or updating a service.
Styling: Basic CSS is used for styling the application.
Technology Stack
Frontend: React.js
Styling: CSS
Setup and Installation
Follow these steps to run the project locally:

Clone the Repository:

bash
Copy code
git clone https://github.com/kaushikdsai/healthcare-services.git
Navigate to the Project Directory:

bash
Copy code
cd healthcare-services
Install Dependencies: Before running the project, ensure you have all the required dependencies:

bash
Copy code
npm install
Run the Application: Start the development server to view the project locally:

bash
Copy code
npm start
The app will be running at http://localhost:3000.

Deployment
The application is deployed using GitHub Pages (or your chosen hosting service). To deploy:

Install gh-pages as a dev dependency:

bash
Copy code
npm install gh-pages --save-dev
Add the following lines to your package.json:

json
Copy code
"homepage": "https://kaushikdsai.github.io/healthcare-services",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy the project:

bash
Copy code
npm run deploy
The app will be live at https://kaushikdsai.github.io/healthcare-services.

Usage
View Services: The list of healthcare services is displayed on the main page.
Add Service: Fill out the form and click "Add Service" to add a new service.
Update Service: Click the edit button next to a service to modify its details.
Delete Service: Click the delete button next to a service to remove it from the list.
Future Enhancements
Add a backend with API support to persist data.
Implement user authentication for managing services.
License
This project is licensed under the MIT License - see the LICENSE file for details.
