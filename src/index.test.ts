import generateRandomPairs from './index'

describe('generateRandomPairs()', () => {
    it('returns an empty array when given an empty array', () => {
        const result = generateRandomPairs([])
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(0)
    })

    it('returns an array containing arrays when given a non-empty array', () => {
        const arrays = [
            ['solo'],
            [1, 2, 3, 4, 5, 6],
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        ]
        arrays.forEach(array => {
            const result = generateRandomPairs<(typeof array)[0]>(array)
            result.forEach(child => {
                expect(Array.isArray(child)).toBe(true)
            })
        })
    })

    it('returns an array half the length of the given even-numbered array', () => {
        const arrays = [
            ['one', 'two'],
            [1, 2, 3, 4],
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        ]
        arrays.forEach(array => {
            const result = generateRandomPairs<(typeof array)[0]>(array)
            expect(result.length).toBe(array.length / 2)
        })
    })

    it('returns an array half the length + 1 of the given odd-numbered array', () => {
        const arrays = [
            ['solo'],
            [1, 2, 3, 4, 5],
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        ]
        arrays.forEach(array => {
            const result = generateRandomPairs<(typeof array)[0]>(array)
            expect(result.length).toBe(Math.ceil(array.length / 2))
        })
    })

    test('each item in the original array is found once in the sub-arrays', () => {
        const arrays = [
            ['solo'],
            [1, 2, 3, 4, 5],
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        ]
        arrays.forEach(array => {
            const result = generateRandomPairs<(typeof array)[0]>(array)
            for (let item of array) {
                let found = 0
                for (let subArray of result) {
                    for (let subArrayItem of subArray) {
                        if (item === subArrayItem) {
                            found++
                        }
                    }
                }
                expect(found).toBe(1)
            }
        })
    })
    test('each sub-array contains two items, given an even-numbered array', () => {
        const arrays = [
            ['one', 'two'],
            [1, 2, 3, 4],
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        ]
        arrays.forEach(array => {
            const result = generateRandomPairs<(typeof array)[0]>(array)
            result.forEach(subArray => {
                expect(subArray.length).toBe(2)
            })
        })
    })

    test('one sub-array contains one item, given an odd-numbered array', () => {
        const arrays = [
            ['solo'],
            [1, 2, 3, 4, 5],
            ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        ]
        arrays.forEach(array => {
            const result = generateRandomPairs<(typeof array)[0]>(array)
            let foundSingleItemArrays = 0
            for (let subArray of result) {
                if (subArray.length === 0) {
                    foundSingleItemArrays++
                }
            }
            expect(foundSingleItemArrays).toBe(0)
        })
    })
})
