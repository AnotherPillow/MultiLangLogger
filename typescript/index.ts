import chalk from 'chalk';
import { strftime } from '../typescript_strftime/strftime';

/*
    This code is licensed under GNU GPL v3.0. The original repository can be found at: https://github.com/AnotherPillow/MultiLangLogger    
    */
type ChalkInstance = typeof chalk.blue & typeof chalk

export default class /* Logger */ {
    time_colour: ChalkInstance | Function = chalk.gray
    time_format: String = '%Y-%m-%d %H:%M:%S'

    info_colour: ChalkInstance | Function = chalk.blue
    warn_colour: ChalkInstance | Function = chalk.yellow
    error_colour: ChalkInstance | Function = chalk.redBright
    success_colour: ChalkInstance | Function = chalk.green

    
    type_col_dict = {
        'info': this.info_colour,
        'warn': this.warn_colour,
        'error': this.error_colour,
        'success': this.success_colour
    }
    
    name_colour: ChalkInstance | Function = chalk.magentaBright

    name: String

    log_function: Function = console.log


    constructor(name: String) {
        this.name = name
    }

    Log(message: String, type: String) {
        let type_colour = this.info_colour
        
        if (this.type_col_dict.hasOwnProperty(type as PropertyKey))
            type_colour = this.type_col_dict[type as keyof typeof this.type_col_dict]
            //type_colour = this[`${type}_colour`]

        const formatted_date = strftime(this.time_format, new Date())

        if (process.stdout.columns && process.stdout.columns > 0) 
            process.stdout.moveCursor(-2, 0)
        
        

        this.log_function(
            `${this.time_colour(formatted_date)} ` + 
            `${type_colour(type.toUpperCase())}${" ".repeat(5 - type.length + 4)}` +
            `${this.name_colour(this.name)} ` + message
        )
    }

    info(message: String) {
        this.Log(message, 'info')
    }

    warn(message: String) {
        this.Log(message, 'warn')
    }

    error(message: String) {
        this.Log(message, 'error')
    }

    success(message: String) {
        this.Log(message, 'success')
    }
}