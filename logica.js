const cheerio = require('cheerio');
const request = require('request-promise');



async function nekoMinig() {

const $ = await request({
uri: 'https://www.hispachan.org/ve/res/1700446.html',
transform: body => cheerio.load(body)

})
let reGex1 = /( VE ........ ........ ..:.. \/#\/ |>>..*|>>....... \(OP\)|>>.......|\/#\/ ....... \[X\]|\d{7}|\d{5}|.*png..|.*.....KB ,.*...x....*,|.*jpg..)/gi;
let reGex2 =/^\s+|\s+$|\s+(?=\s)/g
let titulo = $('#delform');
titulo = titulo.text();
//titulo = (titulo.replace(reGex1, ""));
titulo = titulo.replace(reGex1, "").trim()
console.log(titulo.replace(reGex2, ""))


}
nekoMinig()