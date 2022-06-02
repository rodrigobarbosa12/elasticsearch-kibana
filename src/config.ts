import { Client } from 'elasticsearch';

function getClient() {
  const client = new Client({
    host: 'http://localhost:9200',
    // log: 'trace'
  });

  return client;
}

export default getClient;
