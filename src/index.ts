const randomIndex = <T>(array: T[]) => Math.floor(Math.random() * array.length)

const generateRandomPairs = <T>(array: T[]) => {
    const pairs: Array<Array<T>> = []
    const items = [...array]
    while (items.length > 0) {
        const [itemA] = items.splice(randomIndex(items), 1)
        if (items.length > 0) {
            const [itemB] = items.splice(randomIndex(items), 1)
            pairs.push([itemA, itemB])
        } else {
            pairs.push([itemA])
        }
    }
    return pairs
}

export default generateRandomPairs
