import http from '../http-common';

class PostService {
  getAll() {
    return http.get('/blogposts');
  }
}

export default new PostService();