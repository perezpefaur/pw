var push = require('web-push');

let vapidKeys = {
    publicKey: 'BB2VclKxEI2khPyc0DZyhtlvhBYwfGKr-cd-PSk5-0h2xRL6vXNYF8kSXJe5s7L0lR2-YuBpVppGUYz4pEmsTeo',
    privateKey: 'xS2VAkZqvGjGoLQIoJRdKrb1Sfy1ORLYAit3dY0cgvY'
  } // hacer incognito esto

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey,  vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');