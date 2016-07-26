#!/usr/bin/env node

'use strict';

const program = require('commander');
const CinemarkCrawler = require('gollum-nocinema').CinemarkCrawler;

function getSchedule(url) {
    CinemarkCrawler
        .getSchedule(url)
            .then(function(json) {
                console.log(json);
                process.exit();
            })
            .catch(function(err) {
                console.log(err);
                process.exit();
            });
}

program
    .version('0.0.1')
    .usage('[options]')
    .option('-c, --cinema <url-cinema>', 'URL of cinema to crawling', getSchedule)
    .option('-r, --routine', 'To run routine with all cinemas')
    .parse(process.argv);
