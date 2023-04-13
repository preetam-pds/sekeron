const parse = require('html-react-parser');

const StringToHTMLParser = (htmlValue: any) => {
    if (htmlValue) {
        return parse(htmlValue);
    }
    return htmlValue;
}

export default StringToHTMLParser
