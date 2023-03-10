const customer = require("../model/restaurant-model");


//----------------------------performing create option and checking if the data already present or not
const addDetails = async (req, res, next) => {
    console.log(req);
    const { customerName, tableNumber, timeSlot, _id } = req.body;  
    let data;
        data = new customer({
            customerName,
            tableNumber,
            timeSlot,
            _id,
        });
        data = await data.save();   
   return res.status(200).json({ data });
}
// deleting the data from the database 
const deleteDetails = async (req, res, next) => {
    const { _id } = req.body;
    let data;
    data = await customer.deleteOne({ _id: _id });
    return res.status(200).json({ message: "deleted data successfully " });
}

// reading the data from the database 
const showDetails=async(req,res,next)=>{
    let data;
    data=await customer.find();
    res.status(200).json({data});
}


exports.addDetails = addDetails;
exports.deleteDetails = deleteDetails;
exports.showDetails = showDetails;