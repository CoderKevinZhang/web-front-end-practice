const app = require('koa')();
const router = require('koa-router')();

router.get('/api/homead', function *(next) {
    this.body = require('./home/ad');
});

router.get('/api/homelist/:city/:page', function *(next) {
    const params = this.params;
    const cityName = params.city;
    const pageNum = params.page;

    this.body = require('./home/list');
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);