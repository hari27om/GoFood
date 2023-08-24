const mongoose = require('mongoose');

const mongoURI='mongodb+srv://hari27om:Csjmu123@cluster0.t4nbwvu.mongodb.net/gofoodmern?retryWrites=true&w=majority'

// const mongoDB = async () => {
//     try {
//     await mongoose.connect(mongoURI,{useNewUrlParser: true,useUnifiedTopology:true})
//     console.log('Connected')
//     const fetched_data  = await mongoose.connection.db.collection("food_items")
//     const data = fetched_data.find({}).toArray()
//     console.log(data)}
//     catch(error)
//     {
//         console.log("err:-", error)
//     }
//     }
// module.exports = mongoDB;



// (err)=>{
//     if(err) console.log("---",err)
//     else{
//     console.log("Connected");
//     }
// }


// await mongoose.connect(mongoURI,{useNewUrlParser: true,useUnifiedTopology:true},).then(() => console.log('Connected')).catch((err,result) => { console.error(err);});


// console.log('Connected')
//     const fetched_data  = await mongoose.connection.db.collection("food_items")
//     fetched_data.find({}).toArray(function ( err, data){
//         if(err) console.log(err);
//         else console.log(data);
//     })


// For mongoDB is getting connected succesfully but getting no fetched data/ empty array:
// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log('Connected!');
//     let fetched_data = mongoose.connection.db.collection("food_items");
//     let data=await fetched_data.find({}).toArray() 
//     console.log(data);
//   } catch (error) {
//     console.log('err: ', error);
//   }
// };


const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Connected to MongoDB');

        fetchData();
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
};

async function fetchData() {
    try {
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        // console.log(data);   uncomment it when needed.
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

module.exports = mongoDB