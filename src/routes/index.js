const express = require('express');
const router = express.Router();

const routePathsRecord = {
  angularjs: '/angularjs',
  angular: '/angular',
  health: '/health'
}

const { angularjs, angular, health } = routePathsRecord;

const returnFile = (filePath, response) => {
  response.type('text/html');
  response.sendFile('index.html', {
    root: filePath
  });
}

router.get(health, (request, response, next) => {
  response.json({
    status: 'UP',
    routes: [angularjs, angular, health]
  });
});

router.get('/', (request, response, next) => {
  const filePath = `${__dirname}/../public/`;
  returnFile(filePath, response);
});
router.get('/*', (request, response, next) => {
  const filePath = `${__dirname}/../public/`;
  returnFile(filePath, response);
});

module.exports = router;
