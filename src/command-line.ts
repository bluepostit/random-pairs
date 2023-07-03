import { CommandLineOptions, OptionDefinition } from 'command-line-args'
import commandLineUsage, { Section } from 'command-line-usage'

export const commandLineOptions: (OptionDefinition & CommandLineOptions)[] = [
    {
        name: 'items',
        description: 'the list of items to pair',
        alias: 'i',
        type: String,
        typeLabel: '{underline item ...}',
        multiple: true
    }
    // {
    //     name: 'previous-pairs',
    //     alias: 'p',
    //     type: String,
    //     multiple: true
    // }
]

const appDescription =
    'Generates random pairs from a list of items. You must provide at least ' +
    'one item. If an odd number of items is given, one will end up unpaired.' +
    ' (No triple-groupings will be made)'

const sections: Section[] = [
    {
        header: 'Random Pairs',
        content: appDescription
    },
    {
        header: 'Options',
        optionList: commandLineOptions
    }
]

export const usage = commandLineUsage(sections)
