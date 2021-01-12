'use strict';
// require('egg').Controller  引用egg的控制层
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {"code":200,"msg":null,"data":{"pagination":{"page":1,"size":10,"totalPage":1,"total":5},"result":[{"name":"deviceid","desc":"设备ID","createTime":1571825425000,"operator":"zhangjunqiang@corp.netease.com","featureVos":null},{"name":"ip","desc":"ip","createTime":1572083233000,"operator":"zhangjunqiang1990@corp.netease.com","featureVos":null},{"name":"phone","desc":"手机号","createTime":1572083389000,"operator":"zhangjunqiang@corp.netease.com","featureVos":null},{"name":"userid","desc":"userid","createTime":1573021446000,"operator":"zhangjunqiang@corp.netease.com","featureVos":null},{"name":"itemid","desc":"itemid","createTime":1598606330000,"operator":"zhangjunqiang@corp.netease.com","featureVos":null}]}};
  }
}

module.exports = HomeController;
