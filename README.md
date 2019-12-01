#Mapeamento de SOFs

Utilização de mapeamentos entre a SNOMED CT, CID-10 e CIAP-2 para enriquecimento terminológico em Segundas Opiniões Formativas. 

## Instalação

Para o scraping das SOFs instalar os pacotes [request-promise](https://www.npmjs.com/package/request-promise) e [cheerio](https://www.npmjs.com/package/cheerio).

```bash
npm i request-promise
```

```bash
npm i cheerio
```

Para trabalhar com o [MongoDB](https://www.mongodb.com/) nas consultas:

```bash
npm i mongodb
```


## Uso
Com o MongoDB rodando, para listar as coleções disponíveis:

```javascript
    const database= db.db("SOFS");
    
    database.listCollections().toArray().then((docs) => {
          console.log("Coleções disponíveis:");
          docs.forEach((doc, idx, array) => {console.log(doc.name) });
      }). finally(() => {
          db.close();
      }) 
```

Para procurar por uma SOF em específico:

```javascript
var sof= database.collection("Sofs");
     var cid= database.collection("Cid10Ciap2");
     sof.findOne({idSof: "sof-8"}, {refCid: 0}, function (err) {
         if (err) throw err;
         sof.find({_id: {$in: cid.refCid}, refCid:cid._id}).toArray(function (err, other) {
             if (err) throw err;
         })
     })
```


## Contribuições

Para contribuir com este projeto envie uma requisição pull. Os mapeamentos feitos estão disponíveis como arquivos .JSON. No futuro, pretendo ainda disponibilizar mais mapeamentos.

