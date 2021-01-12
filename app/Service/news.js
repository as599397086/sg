const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    // const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    const data = new Promise((reject, resolve) => {
        setTimeout(() => {
            reject({name: 'lsw', age: 25, sex: '男', page: page});
        }, 500);
    });

   
    
    return data;
  }
}

module.exports = NewsService;