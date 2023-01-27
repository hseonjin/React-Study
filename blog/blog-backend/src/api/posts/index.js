const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

// const printInfo = (ctx) => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//   };
// };

// // 여러 종류의 라우트 설정한 후 모두 printInfo 함수 호출
// // 문자열이 아닌 JSON 객체 반환, 현재 요청 메서드와 경로, 파라미터를 담음
// posts.get('/', printInfo);
// posts.post('/', printInfo);
// posts.get('/:id', printInfo);
// posts.delete('/:id', printInfo);
// posts.put('/:id', printInfo);
// posts.patch('/:id', printInfo);
// module.exports = posts;

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.put('/:id', postsCtrl.replace);
posts.patch('/:id', postsCtrl.update);
