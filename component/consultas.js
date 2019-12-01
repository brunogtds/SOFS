const ObjectId = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";  //porta que o  mongodb está rodando



MongoClient.connect(url, function (err, db) {

    if (err) throw err;

    const database= db.db("SOFS");

    //Mapeamento completo CIAP2 -> CID-10

    database.collection('Sofs').aggregate([
        { $lookup:
            /*
                {
                    from: 'Cid10Ciap2',
                    localField: 'refCid',
                    foreignField: '_id',
                    as: 'map_Cid10Ciap2'
                } */


                { from: 'SnomedCid10',
                  localField: 'refSnomed',
                  foreignField: '_id',
                  as: 'map_Snomed'
                }



        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        database.close();
    });




    database.listCollections().toArray().then((docs) => {
          console.log("Coleções disponíveis:");
          docs.forEach((doc, idx, array) => {console.log(doc.name) });
      }). finally(() => {
          db.close();
      })

    //Consultas mapeamento CIAP-2 -> CID-10

    /* var sof= database.collection("Sofs");
     var cid= database.collection("Cid10Ciap2");
     sof.findOne({idSof: "sof-8"}, {refCid: 0}, function (err) {
         if (err) throw err;
         sof.find({_id: {$in: cid.refCid}, refCid:cid._id}).toArray(function (err, other) {
             if (err) throw err;
         })
     })*/


   /* var sof= database.collection("Sofs");
    var snomed= database.collection("SnomedCid10");
    sof.findOne({idSof: "sof-8"}, {refSnomed: 0}, function (err) {
        if (err) throw err;
        sof.find({_id: {$in: snomed.refSnomed}, refSnomed:snomed._id}).toArray(function (err, other) {
            if (err) throw err;
        })
    })*/





});