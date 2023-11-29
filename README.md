# Project Title: Poster Generator

This project is a simple Node.js application that generates a poster image with predefined text and a background image. The generated poster is saved as a PNG file.

## Features

- Loads a background image onto a canvas
- Adds predefined text onto the canvas at specified positions
- Checks if a file named 'poster.png' already exists
- If 'poster.png' does not exist, it saves the canvas as a PNG file with this name
- If 'poster.png' does exist, it logs a message stating that the file already exists

## How to Use

1. Ensure you have Node.js installed on your machine.
2. Clone this repository.
3. Navigate to the project directory and run `npm install` to install the necessary dependencies.
4. Run `node app.js` (or the name of your main JavaScript file) to generate the poster.

## Dependencies

- [canvas](https://www.npmjs.com/package/canvas): A package that provides a way to create, manipulate, and save images and other graphics in Node.js.

## Future Improvements

- Add the ability to customize the text and images used in the poster.
- Add error handling for issues with loading the background image or saving the poster.
- Improve the file naming system to handle cases where 'poster.png' already exists.
