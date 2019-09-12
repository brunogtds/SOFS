//npm install mongodb para rodar

const ObjectId = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";  //porta que o  mongodb está rodando



MongoClient.connect(url, {useNewUrlparser: true},function (err, db) {

    if (err) throw err;


    const database= db.db("SOFS");

    //lista de coleções disponíveis
     database.listCollections().toArray().then((docs) => {
         console.log("Coleções disponíveis:");
         docs.forEach((doc, idx, array) => {console.log(doc.name) });
     }). finally(() => {
         db.close();
     })

   /* var sof= database.collection("Sofs");
    var cid= database.collection("Cid10Ciap2")
    sof.findOne({idSof: "sof-8"}, {refCid: 0}, function (err, result) {
        if (err) throw err;
        cid.find({"_id": {$in: result.refCid}, refCid:result.refCid}).toArray(function (err, other) {
            if (err) throw err;
        })
    })*/

});