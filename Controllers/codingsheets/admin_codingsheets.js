const All_Coding_Sheets = require("../../Models/codingsheetsModel");

const create_question = async(req,res)=>{
    const { quesName, quesLink, specialTag, tags, connectOn, connectOnDomain } = req.body;

    try {
        const result = await All_Coding_Sheets.create({
            quesName, quesLink, specialTag, tags, connectOn, connectOnDomain
        })
        res.status(200).json({message : "Question has been added to database."});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Something went wrong !"});
    }
}


module.exports = { create_question };