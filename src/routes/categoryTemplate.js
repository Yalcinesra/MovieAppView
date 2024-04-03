"use strict"
/* -------------------------------------------------------
    EXPRESS - category API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const categoryTemplate = require('../controllers/categoryTemplate')

const permission = require('../middlewares/permissions')

// URL: /categorys

// router.route('/')
//     .get(category.list)
//     .post(category.create)

// router.route('/:id')
//     .get(category.read)
//    // .put(permission.isAdmin,category.update)
//     .put(category.update)
//     .patch(permission.isAdmin,category.update)
//     .delete(permission.isAdmin,category.delete)
    

//     router.post('/:id/postLike', category.postLike);

router.get('/',categoryTemplate.list) // 


router.get('/create',categoryTemplate.create) // CREATE
router.post('/create',categoryTemplate.create) // CREATE

router.get('/:id', categoryTemplate.read) // READ


router.get('/:id/delete', categoryTemplate.delete) // DELETE
router.get('/:id/update', categoryTemplate.update) // update
router.post('/:id/update', categoryTemplate.update) // update




/* ------------------------------------------------------- */
module.exports = router