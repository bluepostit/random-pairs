import cliParse from 'command-line-args'
import generateRandomPairs from './index'

const logPairs = <T>(pairs: Array<Array<T>>) => {
    pairs.forEach(([itemA, itemB]) => {
        console.log(`${itemA} - ${itemB || ''}`)
    })
}

const cliParams = [
    {
        name: 'items',
        alias: 'i',
        type: String,
        multiple: true
    }
    // {
    //     name: 'previous-pairs',
    //     alias: 'p',
    //     type: String,
    //     multiple: true
    // }
]

const showUsage = () => {
    const usage = `
Usage: <script> <item1[ item2[ item3...]]

Pairs items in the list randomly and prints the pairings.
You must provide at least one item.
If an odd number of items is given, one will end up unpaired.
(No triple-groupings will be made)
`
    console.log(usage)
}

const main = () => {
    const cliOptions = cliParse(cliParams)
    const items = cliOptions.items

    if (items.length < 1) {
        showUsage()
        process.exit(1)
    }

    const pairs = generateRandomPairs(items)
    logPairs(pairs)
}

main()
