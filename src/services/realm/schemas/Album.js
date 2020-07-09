export class Album {}

Album.schema = {
  name: 'Album',
  primaryKey: 'id',
  properties: {
    id: 'int',
    userId: 'int',
    title: 'string',
    image: 'string',
  },
};
