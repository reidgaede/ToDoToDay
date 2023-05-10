# ToDoToDay
Variation of the traditional "daily to-do list" that integrates the Eisenhower Matrix task management tool.

## Background
"ToDoToDay" is an adaption of a "course goal list" project completed as part of the ["React - The Complete Guide (incl Hooks, React Router, Redux)"](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) course available on Udemy. A reformulation of the classic "to-do list" app that integrates the ["Eisenhower Matrix" task management concept](https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method) purportedly popularized by the World War II-era general and later United States President of the same name, ToDoToDay allows users to better manage their daily responsibilities by:
- Uploading, one-by-one, tasks they believe they might need to complete for a given day (new/additional tasks can be uploaded at any time);
- Organizing each task into one of four categories:
  - Important and Urgent;
  - Urgent but Not Important;
  - Not Urgent but Important; and
  - Not Urgent, Not Important; 
- Striking each task as they are completed simply by clicking that task.

To adapt and improve upon the "course goal list" project's original design, I have executed, among others, the following modifications to change this project into ToDoToDay:
- “Scoped” CSS classes and IDs to the specific component into which said CSS stylings were imported by converting all standard CSS files into “CSS Modules” (did so to ensure uniqueness of CSS class/ID names across entirety of ToDoToDay);
- Added new state variables (and respective "state-updating" functions) in “App.js” – one for each "quadrant" of front-end in ToDoToDay – to fix problem wherein if user clicked on “to-do item” within a single "quadrant", that same "to-do item" would be deleted in every “quadrant”; similarly added another state variable in “ToDoInput.js” to facilitate transfer of “enteredCategory” value to “App.js”;
- Restructured `addGoalHandler()` function as `addTaskHandler()` function, which takes a JavaScript object as input and "sorts", via `switch` statement, each user-submitted "to-do item" into its proper "quadrant";
- Similarly restructured `deleteItemHandler()` function so as to accept a JavaScript object as input and route, via `switch` statement, each user-submitted item deletion request to proper “quadrant”;
- Added `<select>` element within "ToDoInput.js" that allows users to choose which particular "quadrant" they want to add their inputted "to-do item" to;
- Implemented, via `overflow-y` CSS property, vertical "scroll box" for any "quadrant" whose number of “to-do items” exceeded space in “ToDoList.js” allocated for rendering that quadrant’s "to-do" items for any given screen width/height;
- Implemented template literal-fostered string interpolation to dynamically change styling of each `<ToDoItem>` rendered on front-end based on each `<ToDoItem>` instance’s `category` value;
- Implemented CSS media queries that ensured, via responsive design, base-level continuity of user experience across more than a dozen unique screen dimensions;
- Crafted, styled, and integrated `<QuadrantTitleAndTaskCount>` component, which allows each “title”/”label” section of each “quadrant” to display numeric count of “to-do items” for that particular quadrant; and
- Generally updated styling across app as necessary to properly integrate new components/features/functionalities.

## System Requirements and Recommendations
Download and set-up of ReactJS (by way of Node.js) is required prior to utilization of ToDoToDay. If you do not already have Node.js installed on your machine, it can easily be downloaded for free from https://nodejs.org/ (no changes need be made to default Node.js settings during the installation process).

Once you have Node.js installed and have pulled this repo onto your personal computer:
1. Simply open the “ToDoToDay” directory in your preferred text editor or IDE;
2. Open a new Terminal window (for Mac users; Command Prompt or equivalent for Windows users), and navigate via command line to the “ToDoToDay” directory if/as necessary;
3. Once within the "ToDoToDay" directory via command line, input `npm install` to install the necessary “node_modules” directory within “ToDoToDay” (“node_modules” contains required packages and dependencies necessary for this React app to function properly); 
4. Once the “node_modules” directory is included within “ToDoToDay”, you can use the same Terminal/Command Prompt window to input and execute `npm start`, which should initiate the development server through which “ToDoToDay” can be locally accessed; and
5. If `npm start` is successful, then “ToDoToDay” should momentarily be loaded in a new tab in a browser window on your personal computer.

## "Database" Schema
ToDoToDay is not currently connected to any database ([INABIAF](https://en.wikipedia.org/wiki/Bug_(engineering)#%22It's_not_a_bug,_it's_a_feature%22)). Instead, all tasks uploaded by an individual user are stored, as they are submitted by the user, as a JavaScript object within the "taskData" constant, and are subsequently stored, one-by-one, within arrays specific to each quadrant of the Eisenhower Matrix based on the `category` value of that specific instance of the "taskData" object. User-submitted "tasks" are maintained in the browser window for as long as ToDoToDay remains open in a browser window without page-refreshing.

### `taskData` Object
This object stores, one-at-a-time, the individual task items added - via user interaction with the ToDoToDay front-end - to the app.
| Property | Description |
| ----------- | ----------- |
| `task` | String (50-character limit); the name/title for a specific user-uploaded task/"to-do item" |
| `category` | String; the task type/category for a specific user-uploaded task/"to-do item" |
