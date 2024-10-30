const PostModel = require('../models/post.models');


module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts);
};


module.exports.setPosts = async (req, res) => {
    if (!req.body.message) {
        res.status(400).json({ message: "Le message est obligatoire" });
    }

    const post = await PostModel.create({

        // message: 'test',
        // author: 'test',

        message: req.body.message,
        author: req.body.author,
    });

    res.status(200).json(post);

};

module.exports.editPosts = async (req, res) => {

    const post = await PostModel.findByIdAndUpdate(req.params.id);

    if(!post){
        res.status(404).json({message: "Post non trouvé"});
    }

    const updatePost = await PostModel.findByIdAndUpdate( 
        post, 
        req.body, 
        {new: true}
    );

    res.status(200).json(updatePost);
}

module.exports.deletePosts = async (req, res) => {
    const post = await PostModel.findByIdAndUpdate(req.params.id);
    
    if(!post){
        res.status(404).json({message: "Post non trouvé"});
    }

    await post.deleteOne();
    res.status(200).json({message: "Post supprimé"});

}

module.exports.toggleLikePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { likers: req.body.userId } },
            { new: true } 
        ).then((data) => res.status(200).send(data));

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

