const app = require('koa')();
const router = require('koa-router')();

router.get('/api/homead', function *(next) {
    this.body = require('./home/ad')
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);