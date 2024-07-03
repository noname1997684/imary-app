import express from 'express';
import {getPostsBySearch,commentPost,getPost,createPost,getPosts,deletePost,updatedPost,likePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/search',getPostsBySearch)
router.get('/',getPosts)
router.get('/:id',getPost)
router.post('/',auth, createPost);
router.patch('/:id',auth, updatedPost);
router.delete('/:id',auth, deletePost);
router.patch('/:id/likePost',auth,likePost)
router.post('/:id/commentPost',auth,commentPost)
export default router;