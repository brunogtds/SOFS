//sofs: http://pesquisa.bvs.br/aps/?u_filter%5B%5D=fulltext&u_filter%5B%5D=collection_aps&u_filter%5B%5D=db&u_filter%5B%5D=ciap2&u_filter%5B%5D=teleconsultor&u_filter%5B%5D=categoria_da_evidencia&u_filter%5B%5D=mj_cluster&u_filter%5B%5D=clinical_aspect&u_filter%5B%5D=limit&u_filter%5B%5D=pais_assunto&u_filter%5B%5D=la&u_filter%5B%5D=year_cluster&fb=&where=&q=diabetes+AND+%28instance%3Aaps%29+AND+%28+db%3A%28%22SOF%22%29%29&filter%5Byear_cluster%5D%5B%5D=2018

const rp= require('request-promise');
const url= 'http://pesquisa.bvs.br/aps/?u_filter%5B%5D=fulltext&u_filter%5B%5D=collection_aps&u_filter%5B%5D=db&u_filter%5B%5D=ciap2&u_filter%5B%5D=teleconsultor&u_filter%5B%5D=categoria_da_evidencia&u_filter%5B%5D=mj_cluster&u_filter%5B%5D=clinical_aspect&u_filter%5B%5D=limit&u_filter%5B%5D=pais_assunto&u_filter%5B%5D=la&u_filter%5B%5D=year_cluster&fb=&where=&q=diabetes+AND+%28instance%3Aaps%29+AND+%28+db%3A%28%22SOF%22%29%29&filter%5Byear_cluster%5D%5B%5D=2018';
const $= require('cheerio');


rp(url).then(function (html) {

    const sofsUrl=[];

    for(let i=0; i< 8; i++) {

      sofsUrl.push($('div > a', html)[i].attribs.href);
    }

    console.log(sofsUrl)

}).catch(function (err) {
    //tratar erro
});

