const words = ['hello', 'WORLD', 'Whatever'];

const downcaseWorld = words.map(param => {
    console.log(param);
    return param.toLowerCase();
});

console.log(downcaseWorld);