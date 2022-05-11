import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env['MONGODB_URI'], {
  monitorCommands: true,
  connectTimeoutMS: 13000
});

client.on('topologyDescriptionChanged', (event) => {
  console.debug(new Date().toISOString(), event);
});
client.on('serverHeartbeatStarted', (event) => {
  console.debug(new Date().toISOString(), 'serverHeartbeatStarted');
});
client.on('serverHeartbeatFailed', (event) => {
  console.debug(new Date().toISOString(), 'serverHeartbeatFailed');
});
client.on('serverHeartbeatSucceeded', (event) => {
  console.debug(new Date().toISOString(), 'serverHeartbeatSucceeded');
});
client.on('commandStarted', (event) => {
  console.debug(new Date().toISOString(), 'commandStarted');
});
client.on('commandFailed', (event) => {
  console.debug(new Date().toISOString(), 'commandFailed');
});
client.on('commandSucceeded', (event) => {
  console.debug(new Date().toISOString(), 'commandSucceeded');
});

console.debug('Connecting client');
const mongoClient = await client.connect();

export { mongoClient };
