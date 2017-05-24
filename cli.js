#!/usr/bin/env node

var path = require('path')
var args = require('minimist')(process.argv.slice(2))
var Bundle = require('./out/Bundle').Bundle

if (!args['entry']) {
  console.warn('Error entry file should be defined')
} else {

  const {
    base,
    dir,
  } = path.parse(path.resolve(process.cwd(), args['entry']))

  const bundle = Bundle.create({
    name: base,
    path: dir,
    source: 'import         {test,  pock} from "test"'
  })

  console.log(bundle.collectImports())
}
