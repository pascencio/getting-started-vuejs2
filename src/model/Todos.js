import Model from 'model';

class Todo extends Model {
  constructor(options) {
    super(options);
  }
}

export default new Todo({
  version:1,
  schema: {
    
  }
});
