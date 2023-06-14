const randomIndex = array => Math.floor(Math.random() * array.length)

const generateRandomPairs = array => {
    const pairs = []
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
