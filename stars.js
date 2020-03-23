exports.createHeader = (numberOfStars, title) => {
    let stars = '';

    if (!numberOfStars && !title) {
        title = 'hi';
        numberOfStars = 10;
    } else {
        numberOfStars = parseInt(numberOfStars, 10);
    }

    for (let i = 0; i < numberOfStars; i++) {
        stars += '*'
    }

    return `
${stars}
${title}        
${stars}
`
}
