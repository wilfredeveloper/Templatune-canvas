# Templatune

This project is a simple webpage that uses SCSS for styling and JavaScript for functionality. The webpage includes a button that, when clicked, captures the current state of a specific element on the page and downloads it as a JPEG image.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository to your local machine.
2. Open the HTML file in your preferred browser.

## Prerequisites

This project uses SCSS for styling, so you'll need a way to compile the SCSS into CSS. You can use a tool like [Node-sass](https://www.npmjs.com/package/node-sass) or a task runner like [Gulp](https://gulpjs.com/).

## Usage

The main functionality of the webpage is contained within the `captureButton` click event listener. When the button is clicked, the `html2canvas` library is used to capture the current state of the `.canvas` element and convert it into a canvas. The canvas is then converted into a JPEG image and downloaded.

## Built With

- HTML
- SCSS
- JavaScript
- [html2canvas](https://html2canvas.hertzen.com/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments

- [html2canvas](https://html2canvas.hertzen.com/) for providing the library to capture HTML elements as images.