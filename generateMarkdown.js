// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description    
${data.description}  

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the terms of the ${data.license} license.

## Contributing
${data.contributing} 

## Tests
${data.tests}

## Questions
  `;
  }
  
  module.exports = generateMarkdown;