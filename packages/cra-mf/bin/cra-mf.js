#!/usr/bin/env node

'use strict'

const args = process.argv.slice(2);

const scriptIndex = args.findIndex(x => x === 'start' || x === 'build');

if (args.length !== 1 || scriptIndex === -1) {
	throw new Error('Invalid arguments, Valid arguments are "start" & "build"');
}

const script = args[0];

if (script === 'start') {
	require('../scripts/start');
} else if (script === 'build') {
	require('../scripts/build');
}

