# Frontend test - Autocomplete Component

## Summary ##

For the purpose of this exercise, I’ve built a simple auto-complete field for a list of countries. 

### Features ###

- The matching text from the user’s input is highlighted on the suggestion list items.
- The first result is set as active (selected) and the user can use the UP and DOWN arrows and then ENTER key to select an option.
- The suggestion list also allows the user to click on one of the options to select it and fill the input area with the value.

The application was initially created using the create-react-app command using the option for TypeScript. To accelerate the styling development I went with TailwindCSS combined with daisyUI with the latter one providing theming and components based on TailwindCSS.

Starting with the App component (under /src/) which is responsible for retrieving the suggestion data (from a JSON file) and rendering the AutoComplete component. The AutoComplete component (under /src/components/) takes the list of suggestion items as props and then is responsible for the logic and rendering of the input field and list of suggestions.

## Instructions ##

Use `npm install` from a command line to install the dependencies listed in the package.json file.

Then to start the project simply run `npm start`. That will start the application normally under http://localhost:3000/ if that port is available. 
