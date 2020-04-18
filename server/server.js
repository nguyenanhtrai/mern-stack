const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const catalogRoutes = require('./routes/catalogRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const errorRequest = require('./middleware/errorRequest');
const User = require('./models/User');
const controllerUser = require('./controllers/checkUser');
const configDev = require('../config/dev.env');
const configPro = require('../config/prod.env');

const isDevProduction = process.env.NODE_ENV === 'production'
const config = isDevProduction ? configPro : configDev;

const publicPath = path.join(__dirname, '../public');
const port = config.PORT_API || 5000;

const app = express();

mongoose.connect(config.mongoDBURI, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); //
    throw error;
  }
});

const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(expressSession({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

controllerUser.dummyUser()

app.use('/auth', authRoutes);
app.use('/api/catalog', catalogRoutes);
app.use('/api/user', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
app.use('/error', errorRequest)

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${port}!`);
  }
});
