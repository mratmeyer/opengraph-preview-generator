function formatText(ctx, text) {
    const words = text.split(' ');
    let temp = '';
    let result = '';

    // Loop through all of the words
    for (i = 0; i < words.length; i++) {
        // Measure the text width using the canvas
        let width = ctx.measureText(temp + ' ' + words[i]).width;
        // Check if text would overflow
        if (width < 1170) {
            // It wouldn't overflow- add it to temp
            temp = temp + words[i] + ' ';

            // Reached the end of the line- commit temp to result
            if (i == words.length - 1) {
                result = result + temp + '\n';
            }
        } else {
            // Text would overflow- add it to the result variable and reset temp
            result = result + temp + '\n';
            temp = words[i] + ' ';
        }
    }

    return result;
}

module.exports = { formatText };
