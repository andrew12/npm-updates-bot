# npm-updates-bot

This is a simple IRC bot that will post changes to the [npm][] [registry][].

[npm]: https://npmjs.org
[registry]: https://registry.npmjs.org

# Usage

Create an `opts.json` file, something like this:
``` js
{ "server": "irc.freenode.net"
, "nick": "npm-updates"
, "password": "POOP"
, "channels": ["#npm-updates"]
, "channel": "#npm-updates"
, "uri": "https://registry.npmjs.org"
}
````

# License

MIT
