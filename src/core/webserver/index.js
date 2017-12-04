import express from 'express';

class Webserver {
  constructor() {
    this.express = null;
    this.server = null;
  }

  start(callback) {
    this.express = express();

    this.server = this.express.listen(3001, (err) => {
      if (typeof callback === 'function') {
        callback(err, this.express);
      }
    });
  }

  close(callback) {
    if (this.server === null) {
      callback(new Error('Le serveur n\'est pas fonctionnel'));
    } else {
      this.server.close((err) => {
        if (typeof callback === 'function') {
          callback(err);
        }
      });
    }
  }
}

export default new Webserver();
