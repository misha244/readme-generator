// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `
![${license} badge](https://img.shields.io/badge/license-${license}-green)
`;
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "None") {
    return "";
  }
  if (license === "MIT") {
    return `https://www.mit.edu/~amini/LICENSE.md`;
  }
  if (license === "APACHE_2.0") {
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  }
  if (license === "GPL_3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }
  if (license === "BSD_3") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license !== "None") {
    return `This project is licensed under the ${license} license.
    Find out more about it [here](${licenseLink})`;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  const {
    title,
    description,
    installationGuidelines,
    contributionGuidelines,
    testingGuidelines,
    license,
    github,
    email,
  } = answers;

  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);
  const licenseLink = renderLicenseLink(license);

  return `# ${title}

  ${licenseBadge}

  ## Description

  ${description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${installationGuidelines}

  ## Usage

  ${usage}

  ## License

  ${license}

  ## Contributing

  ${contributionGuidelines}

  ## Tests

  ${testingGuidelines}

  ## Questions

  If you have any questions, please get in touch with me throught my [Github](https://www.github.com/${github}) or [email](mailto:${email})!

`;
};

module.exports = generateMarkdown;
