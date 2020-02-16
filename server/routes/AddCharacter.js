const Data = require('../Collections/userSet')

module.exports = (req,res) => {
    let data = req.body

    Data.findOneAndUpdate(
        {'email': data.email},
        {$push: {'characters': data.character}},
        (err, data)=>{
            if(err) console.log(err)
            else console.log(data)
        }
    )
}