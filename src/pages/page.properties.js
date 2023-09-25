import { isNotEmpty, isNotObject } from '../common/helper'

exports.metadata = (o = null) => {
    if (isNotObject(o)) {
        Object.entries(o).forEach(([key, value]) => {
            console.log(`${key} -> ${value}`)
        })
    }
    return `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">`
}