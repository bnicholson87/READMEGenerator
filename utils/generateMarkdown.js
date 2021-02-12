function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  # Table of Contents:
  *[Installation](#installation)
  *[Usage](#usage)
  *[Test](#test)
  *[Contributions](#contributions)
  *[Questions](#questions)
  *[License](#license)
  
  
  ## Installation 
  
  ${data.installation}
  
  ## Usage
  
 ${data.usage}

 ## Test

 ${data.test}
  
  ## Contributions
  
  ${data.contribution}

  ## License
  
  ${data.license}

  ## Questions

  GitHub Userame: ${data.gitHub1}
  GitHub Profile Link: ${data.gitHub2}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
