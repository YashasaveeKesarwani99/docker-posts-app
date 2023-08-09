const { Post, Post }  = require('../models/post-model')

const getAllPosts = async (req,res,next) => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {
                posts
            }
        })
    } catch(e) {
        res.status(400).json({
            satus: "fail",
        })
    }
}

const getPostById = async (req,res,next) => {
    try {
        const post = Post.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            results: post?.length,
            data: {
                post
            }
        })

    } catch(e) {
         res.status(400).json({
            status: 'fail'
         })
    }
}

const createPost = async (req,res,next) => {
    try {
        const post = Post.create(req.body)

        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        })

    } catch(e) {
         res.status(400).json({
            status: 'fail'
         })
    }
}

const updatePost = async (req,res,next) => {
    try {
        const post = Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators:true,
        })

        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        })

    } catch(e) {
         res.status(400).json({
            status: 'fail'
         })
    }
}

const deletePost = async (req,res,next) => {
    try {
        const post = Post.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'success',
        })

    } catch(e) {
         res.status(400).json({
            status: 'fail'
         })
    }
}


module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    deletePost
}