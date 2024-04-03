"use strict"
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
     const data = await Movie.find()
    //console.log(data);
    // res.status(200).send({
    //   error: false,
    //   detail: await res.getModelListDetails(Movie),
    //   data, // data: data
    // });

    res.render('index',{data})
    
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

    // req.body.createdId = req.user._id;

    // const data = await Movie.create(req.body);

    // res.status(201).send({
    //   error: false,
    //   data,
    // });
    if(req.method=='GET'){

      res.render('create')

  }else { // post

      // app.use(express.urlencoded({extended:true} ))

      console.log( " ********** ")
      console.log( req.body)
      const data = await Movie.create(req.body)
      res.redirect('/');

  }
 
  },

  read: async (req, res) => {
    /*
        #swagger.tags = ["Movies"]
        #swagger.summary = "Get Single Movie"
    */
        try {
          // Belirtilen ID'ye sahip filmi bul

          
          
          const data = await Movie.findOne({ _id:req.params.id });

          res.render('read', { data })
         
  
          // countOfVisitors alanını artır
          data.countOfVisitors++;
  
          // Güncellenmiş film verisini kaydet
          await data.save();
  // console.log(data);
          // Yanıt olarak güncellenmiş film verisini gönder
          // return res.status(200).send({
          //     error: false,
          //     data,
          // });
      } catch (error) {
          // console.error("Error:", error);
          // return res.status(500).send({
          //     error: true,
          //     message: "Internal server error.",
          // });
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

   
    if(req.method=='GET'){
        const data = await Movie.findById(req.params.id)
        res.render('update', { data })
        
    } else { // post
        console.log(req.body);
        await Movie.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/');
    }
},


  delete: async (req, res) => {
    /*
        #swagger.tags = ["Movies"]
        #swagger.summary = "Delete Movie"
    */

    // const data = await Movie.deleteOne({ _id: req.params.id });

    // res.status(data.deletedCount ? 204 : 404).send({
    //   //200
    //   error: !data.deletedCount,
    //   data,
    // });
    
    
    const isDeleted = await Movie.findByIdAndRemove({  _id: req.params.id  })
    
    res.redirect('/')
    
  },

  postLike: async (req, res) => {
   console.log("burdayiz**************");
    
    // try {
      
    //   // const createdId = req.user;
     
      

    //   // Check if the movie exists
    //   const movie= await Movie.findOne({ _id: req.params.id });
    //  res.render('/', { data })
    //    console.log(movie.id);
    //   // // Check if the user has already liked the movie
    //   if (movie.likes.includes(movie.id)) {
    //     // return res.status(400).send({
    //     //   error: true,
    //     //   message: "User has already liked the movie.",
    //     // });
    //   }

    //   // Add the user to the likes array
    //   movie.likes.push(movie.id);
    //   await movie.save();

    //   // res.status(200).send({
    //   //   error: false,
    //   //   message: "Movie liked successfully.",
    //   // });
    // } catch (error) {
      
    //   // res.status(500).send({
    //   //   error: true,
    //   //   message: "Internal server error.",
    //   // });
    // }
   
  },
  
};
