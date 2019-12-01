//sofs: http://pesquisa.bvs.br/aps/?u_filter%5B%5D=fulltext&u_filter%5B%5D=collection_aps&u_filter%5B%5D=db&u_filter%5B%5D=ciap2&u_filter%5B%5D=teleconsultor&u_filter%5B%5D=categoria_da_evidencia&u_filter%5B%5D=mj_cluster&u_filter%5B%5D=clinical_aspect&u_filter%5B%5D=limit&u_filter%5B%5D=pais_assunto&u_filter%5B%5D=la&u_filter%5B%5D=year_cluster&fb=&where=&q=diabetes+AND+%28instance%3Aaps%29+AND+%28+db%3A%28%22SOF%22%29%29&filter%5Byear_cluster%5D%5B%5D=2018

/* LINKS DAS SOFS (100 sofs por página):

DIABETES1:

http://pesquisa.bvs.br/aps/?output=site&lang=pt&from=1&sort=&format=summary&count=100&fb=&page=1&filter%5Bdb%5D%5B%5D=SOF&q=diabetes&index=tw

DIABETES2:

http://pesquisa.bvs.br/aps/?output=site&lang=pt&from=101&sort=&format=summary&count=100&fb=&page=2&filter%5Bdb%5D%5B%5D=SOF&q=diabetes&index=tw

HIPERTENSÃO:

http://pesquisa.bvs.br/aps/?output=site&lang=pt&from=101&sort=&format=summary&count=100&fb=&page=2&filter%5Bdb%5D%5B%5D=SOF&q=hipertens%C3%A3o&index=tw&search_form_submit=Pesquisar


 */



const rp= require('request-promise');
//Diabetes1
//const url= 'http://pesquisa.bvs.br/aps/?output=site&lang=pt&from=1&sort=&format=summary&count=100&fb=&page=1&filter%5Bdb%5D%5B%5D=SOF&q=diabetes&index=tw';
//Diabetes2
//const url= 'http://pesquisa.bvs.br/aps/?output=site&lang=pt&from=101&sort=&format=summary&count=100&fb=&page=2&filter%5Bdb%5D%5B%5D=SOF&q=diabetes&index=tw';
//Hipertensão1
const url= 'http://pesquisa.bvs.br/aps/?output=site&lang=pt&from=101&sort=&format=summary&count=100&fb=&page=2&filter%5Bdb%5D%5B%5D=SOF&q=hipertens%C3%A3o&index=tw&search_form_submit=Pesquisar';

const $= require('cheerio');

const sofsUrl=[];

const fs = require('fs');
const util = require('util');
const log_file = fs.createWriteStream(__dirname + '/Hipertensao.log', {flags : 'w'}); //Alterar nome do arquivo log
const log_stdout = process.stdout;

//Override da função console.log para gerar arquivos log

console.log = function(d) { //
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};


rp(url).then(function (html) {



    for (let i=0; i < 332; i++) {

        sofsUrl.push({"Links das sofs": $('.record', html).find('a')[i].attribs.href.trim().split(" ")});
    }



  console.log(util.inspect (sofsUrl, {maxArrayLength: null}));



}).catch(function (err) {
    console.log("Algo deu errado");
    return err;
});

/**/