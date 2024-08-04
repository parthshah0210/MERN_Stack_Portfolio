const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://parth:Parthshah%402016@cluster0.0s9xob4.mongodb.net/aws?retryWrites=true&w=majority&appName=Cluster0+srv://admin:Parthshah@cluster0.9udsr.mongodb.net/myportfolio?retryWrites=true&w=majority'; mongoose.connect(dbURI);

mongoose.connect(dbURI);


mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error : ', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


const gracefulShutDown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// nodemon changes
process.once('SIGUSR2', () => {
    gracefulShutDown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// for app termination
process.once('SIGINT', () => {
    gracefulShutDown('app termination', () => {
        process.exit(0);
    });
});

// for heroku app termination
process.once('SIGTERM', () => {
    gracefulShutDown('Heroku app termination', () => {
        process.exit(0);
    });
});

require('./contact');