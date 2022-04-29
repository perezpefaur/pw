var push = require('web-push');

let vapidKeys = {
    publicKey: 'BB2VclKxEI2khPyc0DZyhtlvhBYwfGKr-cd-PSk5-0h2xRL6vXNYF8kSXJe5s7L0lR2-YuBpVppGUYz4pEmsTeo',
    privateKey: 'xS2VAkZqvGjGoLQIoJRdKrb1Sfy1ORLYAit3dY0cgvY'
  } // hacer incognito esto

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey,  vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dDYr8oC2x-g:APA91bGL1jJVhk8GPXYGe2MiXCaIlXNeS-zJS5EAyIIIy9d0pu_taxnWP2fzZXe8xVMIw806j2UZmqRll27ocjHm493ZzBV0wAzhZldWmLp993hMVQdv6Wj0JnoRJglAMM50VDvRfOvT","expirationTime":null,"keys":{"p256dh":"BE5n5mFkDYLknC_B8Cm-6qg0TH_GHLhK0EhGqOJWD8HtQsjMrNLcY4Ub-00giJwV6z_kh1qB1zYzhZRkqjIkOxw","auth":"Pf4paSroukg05sHmXYqMVg"}};

push.sendNotification(sub, 'test message');