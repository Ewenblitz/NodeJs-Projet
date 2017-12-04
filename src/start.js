import Webserver from 'app/core/webserver';
import Connect from 'app/core/bdd/connect.js';

Connect.connect();

Webserver.start(3001, (err) => {
  if (!err) {
    console.log('Serveur Web Lancé et fonctionnel');
  }
});
