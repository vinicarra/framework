export class Post {}

Post.schema = {
  name: 'Post',
  primaryKey: 'id',
  properties: {
    id: 'int',
    userId: 'int',
    title: 'string',
    body: 'string',
  },
};
