const mongoose = require('mongoose');

class Connect {

  connect() {
    mongoose.connect ('mongodb://127.0.0.1/BDD');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erreur de connexion'));
    db.once('open', function() {
      //Connexion
    });
  }

}

export default new Connect();
