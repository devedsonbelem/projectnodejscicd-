const express = require('express');
const app = express();
const env = require('./config/env');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;
const mongoURI = env.mongoURI;
const tid = require('./utils/tid');
const log = require('./utils/log');

app.use(bodyParser.json());
app.use(tid.set());

// Load models
require('./models/Contact');
require('./models/Customer');

mongoose.connect(mongoURI, { useNewUrlParser: true });

// Load routes
require('./routes/envRoutes')(app);
require('./routes/contactsRoutes')(app);

app.listen(PORT, function() {
  log.info('Application poc-contact listening on port ' + PORT);
});
