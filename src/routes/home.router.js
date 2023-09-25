const express = require('express');
const router = express.Router();
const page = require('../pages/page')
const d = require('../configs/data')

router.get('/',(req,res)=>{
	let data = d;
	res.send(page.index(data));
})

module.exports = router