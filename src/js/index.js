// Create a new canvas element
const canvas = document.createElement('canvas');
canvas.width = 1080;
canvas.height = 1080;
const ctx = canvas.getContext('2d');

// Load the background image
const backgroundImage = new Image();
backgroundImage.src = '../bg.jpg';
backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, 1080, 1080);
    generatePoster();
}

function generatePoster() {
    // Add the text elements
    ctx.fillStyle = '#fff';
    ctx.font = '36px Arial';
    ctx.fillText('Google Developer Student Clubs', 10, 50);
    ctx.fillText('University Name', 10, 90);
    ctx.fillText('Info session', 10, 130);
    ctx.font = '24px Arial';
    ctx.fillText('Enter the Title of your', 10, 170);
    ctx.fillText('event Here', 10, 200);
    ctx.fillText('REPLACE WITH', 200, 280);
    ctx.fillText('YOUR PHOTO', 200, 310);
    ctx.font = '16px Arial';
    ctx.fillText('Add your subheading or any', 10, 350);
    ctx.fillText('additional information here.', 10, 370);
    ctx.font = '12px Arial';
    ctx.fillText('Lorem ipsum dolor sit amet, consectetur adipiscing', 10, 410);
    ctx.fillText('elit, sed do eiusmod tempor incididunt ut labore et', 10, 430);
    ctx.fillText('dolore magna aliqua. Ut enim ad minim veniam, quis', 10, 450);
    ctx.fillText('nostrud exercitation ullamco laboris nisi ut aliquip ex', 10, 470);
    ctx.fillText('ea commodo consequat. Duis aute irure dolor in', 10, 490);
    ctx.fillText('reprehenderit in voluptate velit esse cillum dolore eu', 10, 510);
    ctx.fillText('fugiat nulla pariatur.', 10, 530);
    ctx.font = '18px Arial';
    ctx.fillText('Speaker Name Here', 10, 570);
    ctx.fillText('Title/Position', 10, 600);
    ctx.font = '12px Arial';
    ctx.fillText('Enter Venue Here', 500, 570);
    ctx.fillText('25th Aug, 2023 | 12:30pm GMT', 500, 600);

    // Save the canvas image as data url (png format by default)
    const dataUrl = canvas.toDataURL();

    // Create a link element, hide it, direct 
    // it towards the canvas data url and click it.
    let link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'poster.png';
    link.textContent = 'Download Poster';
    document.body.appendChild(link);
    // link.click();
}

generatePoster();
// Call generatePoster after the image has been loaded