const router = require(`express`).Router();
const fs = require("fs");

router.get(`/`, async (req,res) =>{
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf-8"))
    res.json(dbJson);
});


router.post(`/`, async (req,res) =>{
    try {
        const notesarray = await JSON.parse(fs.readFileSync("db/db.json","utf-8"))
        const newnote = {
           title:req.body.title,
           text:req.body.text,
           id:new Date()
        }
        notesarray.push(newnote)
        fs.writeFileSync(`./db/db.json`,JSON.stringify(notesarray))
        res.status(200).json(notesarray)
    } catch (err) {
    console.error(err)   
    res.status(500).json(err)
    }
})

//router.delete(`/api/notes:id`, (req,res) => {
   // let data = fs.readFileSync("db/db.json", "utf8");
   // const dataJSON = JSON.parse(data);
   // const newNotes = dataJSON.filter((note) =>{
     //   return note.id !== req.params.id;
   // });
   // fs.writeFileSync("db/db.json", JSON.stringify(newNotes))
   // res.json("Note deleted.");
console.log(module.exports)
module.exports = router;