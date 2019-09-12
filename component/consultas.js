//npm install mongodb para rodar

const ObjectId = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";  //porta que o  mongodb está rodando



MongoClient.connect(url, function (err, db) {

    if (err) throw err;

    const database= db.db("SOFS");

    //Mapeamento completo CIAP2 -> CID-10

    database.collection('Sofs').aggregate([
        { $lookup:
                {
                    from: 'Cid10Ciap2',
                    localField: 'refCid',
                    foreignField: '_id',
                    as: 'map_Cid10Ciap2'
                }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        database.close();
    });


    //Lista de coleções disponíveis no banco

   /*  database.listCollections().toArray().then((docs) => {
         console.log("Coleções disponíveis:");
         docs.forEach((doc, idx, array) => {console.log(doc.name) });
     }). finally(() => {
         db.close();
     }) */

   //Consultas mapeamento CIAP-2 -> CID-10

   /* var sof= database.collection("Sofs");
    var cid= database.collection("Cid10Ciap2");
    sof.findOne({idSof: "sof-8"}, {refCid: 0}, function (err, cid) {
        if (err) throw err;

        sof.find({_id: {$in: cid.refCid}, refCid:cid._id}).toArray(function (err, other) {
            if (err) throw err;
        })
    })
    */





});