// function to generate markdown for README

const markDown = function generateMarkdown(data) {
  return `
# 1. Title
${data.Title}
# 2. Description
${data.Description}
# 3. Table of Contents
${data.Contents}
# 4. Installation
${data.Installation}
# 5. Usage
${data.Usage}
# 6. Licence
${data.License}
# 7. Contributing
${data.Contributors}
# 8. Tests
${data.Test}
# 9. Github
${data.Github}
# 10. Email
${data.Email}`          
}

module.exports = markDown; //refer to module 8