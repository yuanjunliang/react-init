#!/usr/bin/env node  // 注意，这一句很关键，一定要加上
const program = require('commander');
const download = require('download-git-repo');
const ora = require('ora');

const spinner = ora('start create react app')

program.version('1.0.0', '-v, --version')
       .command('init <name>')
       .action((name) => {
          spinner.start()
          download('direct:https://github.com/yuanjunliang/react-init.git', name, {clone: true}, (err) => {
              if(err){
                spinner.fail('create react app failed')
              }else{
                spinner.succeed('create react app success')
              }
          })
       });
program.parse(process.argv);