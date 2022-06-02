const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('ShuffleArray should return an array', () => {
        expect(shuffleArray.results).toBe(Array)
    })

    test('Array returned same length as array sent in', () => {
        expect(shuffleArray.results.length).toEqual(shuffleArray.length)
    })
})