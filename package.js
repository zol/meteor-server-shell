Package.describe({
  summary: "Run shell commands on you server",
  version: "0.0.0",
  name: "zoltan:server-shell"
});

Npm.depends({shelljs: "0.5.3"});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.use(['templating', 'ui', 'mongo'], 'client');
  api.add_files([
    'client/server-shell.html',
    'client/server-shell.js',
    'client/server-shell.css'
  ], "client");
  api.add_files(['server-shell-server.js'], "server");
  api.export('ServerShell', 'server');
});
