const NoteModel = require('../models/noteModel');

const getNotes = async (req, res) => {
    try {
        const notes = await NoteModel.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createNote =  async (req, res) => {
    const { title, note, category } = req.body;
    try {
        const newNote = new NoteModel({ title, note, category });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateNote = async(req,res)=>{
   try{
    const ID = req.params.id;
    const payload = req.body;
    const note = await NoteModel.findOne({_id:ID});
    if(!note){
       res.json("Note not found with this ID");
    }else{
      await NoteModel.findByIdAndUpdate({_id:ID},payload);
      res.json(`note of a ID ${ID} is updated`);
    }
   
   }catch(err){console.log(err)};
}

const deleteNote = async(req,res)=>{
    try{
     const ID = req.params.id;
     const note = await NoteModel.findOne({_id:ID});
     if(!note){
       res.json("Note not found with this ID");
     }else{
      await NoteModel.findByIdAndDelete({_id:ID});
      res.json(`note of a ID ${ID} is deleted`);
     }
     
    }catch(err){console.log(err)};
 }

module.exports = { getNotes, createNote, updateNote, deleteNote };