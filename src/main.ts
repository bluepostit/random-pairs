import cliParse from 'command-line-args'
import generateRandomPairs from './index'
import { usage, commandLineOptions } from './command-line'

const logPairs = <T>(pairs: Array<Array<T>>) => {
    pairs.forEach(([itemA, itemB]) => {
        console.log(`${itemA} - ${itemB || ''}`)
    })
}

const main = () => {
    const cliOptions = cliParse(commandLineOptions)
    const items = cliOptions.items

    if (!items || items.length < 1) {
        console.log(usage)
        process.exit(1)
    }

    const pairs = generateRandomPairs(items)
    logPairs(pairs)
}

main()
