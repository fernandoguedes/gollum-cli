#!/usr/bin/env node

'use strict';

const program = require('commander');

program
    .arguments('<file>')
    .option('-c, --cinema <cinema>', 'Cinema name to crawling')
    .option('-r, --region <region>', 'Region name to crawling')
    .action(function(file) {
        console.log(program);
    })
    .parse(process.argv);
