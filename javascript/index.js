// import chalk, { ChalkInstance } from 'chalk';
const chalk = require('chalk');
const { ChalkInstance } = require('chalk');
// import { strftime } from '../typescript_strftime/strftime';
const strftime = require('../javascript_strftime/strftime');

/*
    This code has been adapted from https://github.com/AnotherPillow/farm-computer/blob/main/src/logger.py
    */


module.exports = class Logger {
    time_colour = chalk.gray
    time_format = '%Y-%m-%d %H:%M:%S'

    info_colour = chalk.blue
    warn_colour = chalk.yellow
    error_colour = chalk.redBright
    success_colour = chalk.green

    
    type_col_dict = {
        'info': this.info_colour,
        'warn': this.warn_colour,
        'error': this.error_colour,
        'success': this.success_colour
    }
    
    name_colour = chalk.magentaBright

    name

    log_function = console.log


    constructor(name) {
        this.name = name
    }

    Log(message, type) {
        let type_colour = this.info_colour
        
        if (this.type_col_dict.hasOwnProperty(type))
            type_colour = this.type_col_dict[type]
            
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

    info(message) {
        this.Log(message, 'info')
    }

    warn(message) {
        this.Log(message, 'warn')
    }

    error(message) {
        this.Log(message, 'error')
    }

    success(message) {
        this.Log(message, 'success')
    }
}