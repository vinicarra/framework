export class Todo {}

Todo.schema = {
  name: 'Todo',
  primaryKey: 'id',
  properties: {
    id: 'int',
    userId: 'int',
    title: 'string',
    completed: 'bool',
  },
};
