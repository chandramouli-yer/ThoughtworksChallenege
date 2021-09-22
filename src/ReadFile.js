const fs = require('fs')
const ReadFile=(fileName) =>{
    try {
        const data = fs.readFileSync(fileName, 'utf8')
        let content = [];
        let text = '';
        for (let i = 0; i < data.length; i++) {
            if (data[i] === '\n' || data[i] === '\r') {
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

