var Client = require('irc').Client
  , NPM = require('npm-updates')
  
  , opts = require('./opts')
  
  , bot = new Client(opts.server, opts.nick, opts)
  , npm = new NPM(opts)

function format(pkg) {
  var name = pkg.name
    , version = pkg.version
    , homepage = pkg.homepage || 'https://npm.im/' + name
    , keywords = pkg.keywords
    , desc = pkg.description
    
    , out = name + '@' + version + ' '
  
  if (desc) {
    if (desc.length > 60) {
      desc = desc.substr(0, 60) + '...'
    }
    out += '(' + desc + ') '
  }
  
  if (keywords && keywords.length) {
    out += '[' + keywords.join(', ') + '] '
  }
  
  out += homepage
  
  return out
}
  
npm.on('new', function (pkg) {
  bot.say(opts.channel, '[new] ' + format(pkg))
})

npm.on('update', function (pkg) {
  bot.say(opts.channel, '[update] ' + format(pkg))
})

npm.on('delete', function (name) {
  bot.say(opts.channel, '[delete] ' + name)
})
