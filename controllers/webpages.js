//Webpage controllers
const
  Webpage = require('../models/Webpage.js') //require the Webpage model to be able to create functions on the database

module.exports = {
  index: (req, res) => {
    Webpage.find({},(err, webpages) => {
      if (err) {console.log(err)}
      res.json(webpages)
    })
  },
  show: (req, res) => {
    var id = req.params.id
    Webpage.findById(id, (err, webpage) => {
      if(err) return console.log(err);
      res.render("show", {webpage})
    })

    req.params.id

    //

    // res.redirect("/")
    //you can show a sepcific webpage (if it exists in the database) by doing Webpage.findById()
    //in the webpage router (not here)you can do something down this line:
  //
},
create: (req, res) => {
  Webpage.create(req.body, (err, newlyPage) => {
  if(err) return console.log(err)
  console.log("New Page Created ", newlyPage);
  res.redirect('/webpages/')
})
},

  //customized functions here
  //find crtlF-webpage object or return null
  //findOrReturnNull
   createOrFind: (req, res) => {
    // We need to check if the URL is valid
    Webpage.find( {url:req.body.url} , function(errs, webpage){
      if(errs) console.log(errs);
      var newPageID
      if (webpage.length > 0) {
        newPageID = webpage[0]._id
      } else {
        Webpage.create({url: req.body.url}, (err, newlyPage) => {
          newPageID = newlyPage._id
        })
      }
      res.json(newPageID)
    })
   }
}
