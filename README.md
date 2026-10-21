# TaskFlow - Task Manager

A clean, responsive task manager built with HTML, CSS and vanilla JavaScript. Add tasks, mark them complete, filter them, and keep your list saved in the browser, with no frameworks or backend needed.

**Live demo:** https://justinharisss14.github.io/taskflow/

## Features

- Add new tasks (empty tasks are blocked with a friendly alert)
- Mark tasks as completed or pending with a checkbox
- Delete tasks
- Filter tasks by **All**, **Pending** or **Completed**, with the active filter highlighted
- Live counters for total and completed tasks
- Helpful empty-state messages
- Tasks are saved in the browser with `localStorage`, so they are still there after a refresh
- Responsive layout that works on desktop and mobile

## Tech Stack

- **HTML5** for semantic structure (`main`, `header`, `form`, `nav`, `section`)
- **CSS3** with Flexbox and media queries for responsive design
- **JavaScript (ES6)** for DOM manipulation, event handling and state management
- **Web Storage API** (`localStorage`) for data persistence

## Project Structure

```
taskflow/
├── index.html   # Page structure
├── style.css    # Styling and responsive layout
└── script.js    # App logic (add, complete, delete, filter, save)
```

## Run Locally

1. Clone or download this repository:
   ```bash
   git clone https://github.com/justinharisss14/taskflow.git
   ```
2. Open the folder and double-click `index.html`, or use the **Live Server** extension in VS Code (right-click `index.html` → **Open with Live Server**).

No installation or build step is required.

## What I Learned

- Building and updating the UI dynamically with the DOM API
- Managing app state in a JavaScript array and re-rendering from it
- Persisting data safely with `localStorage` and `try/catch` error handling
- Writing responsive CSS without a framework
- Deploying a static site with GitHub Pages

## Future Improvements

- Edit existing tasks
- "Clear completed" button
- Due dates and sorting
- Dark mode

## Author

**YOUR NAME**
GitHub: [@justinharisss14](https://github.com/justinharisss14)

