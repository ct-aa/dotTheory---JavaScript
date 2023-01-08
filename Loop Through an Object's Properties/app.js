const composer = {
    name: 'Edward Ellington',
    nickname: 'Duke',
    genres: ['jazz', 'swing'],
    instrument: 'piano'
};

for (let key in composer) {
    console.log(`${key}: ${composer[key]}`);
}