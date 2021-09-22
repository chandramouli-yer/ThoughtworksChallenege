const fs = require('fs')
let newLine='\n';
let carriageReturn='\r'
let charSet='utf8'
const ReadFile=(fileName) =>{
    try {
        const data = fs.readFileSync(fileName, charSet)
        let content = [];
        let text = '';
        for (let i = 0; i < data.length; i++) {
            if (data[i] === newLine || data[i] === carriageReturn) {
                content.push(text);
                text = ''
            }
            else text += data[i];

        }
        content.push(text);
        content = content.filter(n => n)
        return content;
    } catch (err) {
        console.error(err)
    }
}
module.exports = ReadFile;

