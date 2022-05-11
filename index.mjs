import { mongoClient } from './db.mjs';

const handler = async () => {
  const database = mongoClient.db('tmp_reproduction');
  const articlesCollection = database.collection('articles');

  const count = await articlesCollection.estimatedDocumentCount();
  console.debug('articles', count);

  return {
    statusCode: 200,
    count: count,
  };
};

export { handler };
