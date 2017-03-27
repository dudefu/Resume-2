/**
 * Created by JQ on 2017/1/22.
 */
var fs = require('fs');
var sass = require('node-sass');

sass.render({
    file: 'index.scss',
    outputStyle: 'compressed' //不需要压缩时，去掉该项
} ,function(err ,result) {
    if(err) console.log(JSON.stringify(err));

    fs.writeFile('./min.css' ,result.css ,function(err) {
        if(err) throw err;

        console.log('css 生成成功！');
    });
});
