module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '18.217.124.44',
      username: 'ubuntu',
      pem: '/home/dev/.projects/codegenie/rose/app-deploy/codegenie.pem'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'sunflower',
    path: '../sunflower',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://ec2-18-217-124-44.us-east-2.compute.amazonaws.com',
      MONGO_URL: 'mongodb://lincardb:mango0$@ds145780.mlab.com:45780/lincar0dev',
    },

    // ssl: { // (optional)
    //   // Enables let's encrypt (optional)
    //   autogenerate: {
    //     email: 'email.address@domain.com',
    //     // comma separated list of domains
    //     domains: 'website.com,www.website.com'
    //   }
    // },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:node-8.4.0-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },


};
