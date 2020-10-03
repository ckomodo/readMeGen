// function to generate markdown for README

const markDown = function generateMarkdown(data) {
  return `#Title ${data.Title}
          # Description ${data.Description}
          # Table of Contents ${data.Contents}
          # Installation ${data.Installation}
          # Usage ${data.Usage}
          # Licence ${data.License}
          # Contributing ${data.Contributing}
          # Tests ${data.Tests}
          # Questions ${data.Questions}`
}

module.exports = markDown; //refer to module 8