"use strict";
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */

const Movie = require("../models/movie");

module.exports = {
  list: async (req, res) => {
    
    /*
        #swagger.tags = ["Movies"]
        #swagger.summary = "List Movies"
        #swagger.parameters['author'] = {
          in: 'query',
          name: 'author',
        }
        #swagger.description = `
            You can use filter[] & search[] & sort[] & page & limit queries with endpoint.
            <ul> Examples:
                <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                <li>URL/?<b>limit=10&page=1</b></li>
            </ul>
            You can use author=userId query for get all Movies of any user.
        `
    */

   // const data = await res.getModelList(Movie);

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Movie),
      data, // data: data
    });
  },

  create: async (req, res) => {
    /*
        #swagger.tags = ["Movies"]
        #swagger.summary = "Create Movie"
        #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "categoryId": "65343222b67e9681f937f101",
                    "title": "Movie Title 1",
                    "content": "Movie Content 1",
                    "image": "http://imageURL",
                    "isPublish": true
                }
            }
    */

    req.body.createdId = req.user._id;

    const data = await Movie.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    console.log("burdayim");
    /*
        #swagger.tags = ["Movies"]
        #swagger.summary = "Get Single Movie"
    */
        try {
          // Belirtilen ID'ye sahip filmi bul
          const data = await Movie.findOne({ _id: req.params.id });
  
          if (!data) {
              return res.status(404).send({
                  error: true,
                  message: "Movie not found.",
              });
          }
  
          // countOfVisitors alanını artır
          data.countOfVisitors++;
 // console.log(countOfVisitors);
          // Güncellenmiş film verisini kaydet
          await data.save();
  
          // Yanıt olarak güncellenmiş film verisini gönder
          return res.status(200).send({
              error: false,
              data,
          });
      } catch (error) {
          console.error("Error:", error);
          return res.status(500).send({
              error: true,
              message: "Internal server error.",
          });
      }
  },

  update: async (req, res) => {
    /*
        #swagger.tags = ["Movies"]
        #swagger.summary = "Update Movie"
        #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "categoryId": "65343222b67e9681f937f101",
                    "title": "Movie Title 1",
                    "content": "Movie Content 1",
                    "image": "http://imageURL",
                    "isPublish": true
                }
          }
    */

    const data = await Movie.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Movie.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    /*
        #swagger.tags = ["Movies"]
        #swagger.summary = "Delete Movie"
    */

    const data = await Movie.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      //200
      error: !data.deletedCount,
      data,
    });
  },
//! --------------------------------- LIKES --------------------------------- */

  //! GET
  listLike: async (req, res) => {
    /*
        #swagger.tags = ["movie"]
        #swagger.summary = "Get Like Info"
    */

    const userId = req.user?.id;

    const data = await Movie.findOne(
      { _id: req.params.id },
      { _id: 0, likes: 1 }
    );

    res.status(200).send({
      error: false,
      didUserLike: data.likes.includes(userId),
      countOfLikes: data.likes.length,
    });
  },

  //! POST
  createLike: async (req, res) => {
    /*
        #swagger.tags = ["movies"]
        #swagger.summary = "Add/Remove Like"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {}
        }
    */

    const userId = req.user?.id;

    const data = await Movie.findOne({ _id: req.params.id });

    if (data.likes.includes(userId)) {
      data.likes.pull(userId);
    } else {
      data.likes.push(userId);
    }
    data.save();

    res.status(202).send({
      error: false,
      didUserLike: data.likes.includes(userId),
      countOfLikes: data.likes.length,
    });
  },
};

