var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/cadastro', function(req,res){
  res.render('formCadastro');
});

router.post('/cadastro', function(req,res){
  
});

router.get('/editar', function(req,res){
  res.render('formEditar');
});



module.exports = router;
