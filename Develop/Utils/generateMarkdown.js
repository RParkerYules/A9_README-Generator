

// Returns a license badge based on the license that has been selected
function renderLicenseBadge(license) {

  if (license === "Apache license 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  
  else if (license === "BSD 2-clause license") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  }

  else if (license === "BSD 3-clause license") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }

  else if (license === "Eclipse Public License 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }

  else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }

  else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }

  else if (license === "Open Database License (ODbL)") {
    return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
  }


}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  
  return `# ${data.title} 

My Github User Name is: ${data.GitHubUsername}

My email address is:  ${data.EmailAddress}

- [Description](#description)
- [License](#license)
- [Dependencies](#dependencies)
- [Tests](#tests)
- [User Information](#user-information)
- [Contributiors](#contributors)
- [Tutorial](#tutorial)


# Description
${data.Description}

# License

The following license is required for this project:

${renderLicenseBadge(data.License)}

# Dependencies

The command to install and run dependencies is:  ${data.Dependencies}

# Tests

The command to perform tests is: ${data.Tests}

# User Information

The user information required for this project includes:  ${data.UserInformation}

# Contributors

People who have contributed to this project include:  ${data.Contributors}

# Tutorial

To watch a tutorial go to: [Tutorial](https://drive.google.com/file/d/1HdPyBqDRDr8vQ2iPUT-QhBLP49w-MUZy/view?usp=sharing)

`;
 
}

module.exports = generateMarkdown;
