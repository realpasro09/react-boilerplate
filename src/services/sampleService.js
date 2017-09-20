const request = require('../utils/request').default;

class SampleService {
  getSampleData() {
    return request('https://jsonplaceholder.typicode.com/users');
  }
}

module.exports = SampleService;
