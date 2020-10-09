#!/usr/bin/env node

const clearConsole = require('clear-any-console');
const chalk = require('chalk');
const log = console.log;

// Clears the console.
clearConsole();

const styleText = (str) => chalk.green.bgBlack.bold(str);
const styleInfo = (str) => chalk.white.bold.italic.underline(str);

log(`
${styleText(' Hello, ')}

${styleText(' My name is Gustavo and I am a sr. Javascript developer. I have been developing websites and applications for around 7 years. Most my experience lies in full stack development. I have worked with HTML/ CSS, Javascript (NodeJS-ReactJS), .NET, and a little bit of Python. ')}

${styleText(' I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me. ')}

${styleText(' Sincerely, ')}
${styleText(' Gustavo Adolfo Olmedo ')}

${styleText('Linkedin:')} ${styleInfo('https://www.linkedin.com/in/gustavo-olmedo/')}
${styleText('E-mail:')} ${styleInfo('gustavo.olmedo.formosa@gmail.com')}

`);