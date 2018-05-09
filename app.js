var fs = require('fs');
var bodyParser = require("body-parser");
var express = require('express');
var path = require('path');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

});

app.get('/controllers/:id', function (req, res) {
    res.sendFile(path.join(__dirname + '/controllers/' + req.params.id));
    //res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/send_path', function (req, res) {
    function objectSend(massOfFiles, which_of_tables) {
        this.massOfFiles = massOfFiles;
        this.which_of_tables = which_of_tables;
    };
    // var objectSend = new objectSEnd((massOfFiles, which_of_tables);
    var massSend=[];

    fs.readdir(req.body.newPath, function(err, items) {
        var strPath = '';
        if(req.body.newPath == 'C://'){
            strPath = req.body.newPath;
        } else{
            strPath = req.body.newPath +'//';
        }
        console.log('strPath=', strPath,'items[0]=', items[0]);
        if (items.length != undefined){
            /*for(var i = 0; i<items.length; i++){

                fs.stat(strPath + items[i], function(err, stats) {

                    massSend[i] = new objectSend(items[i], stats.isFile());
                });
            }*/
           /* var i =0;
            var recFunc = function () {
                if(i<items.length){
                    fs.stat(strPath + items[i], function(err, stats) {
                        console.log('items[i], stats.isFile():', items[i], stats.isFile());
                        console.log('strPath + items[i]: ', strPath + items[i]);
                        massSend[i] = new objectSend(items[i], stats.isFile());
                        i++;
                        recFunc();
                    });
                } else{
                    return 0;
                }

            }
            recFunc();
            massSend.join('/n');*/
            /*fs.stat(strPath + items[8], function(err, stats) {
                console.log('items[7], stats.isFile():', items[7], stats.isFile());
                console.log('strPath + items[7]: ', strPath + items[7]);

            });*/

            var objSend = new objectSend(items, req.body.which_of_tables);
            res.send(objSend);
        } else {
            var it = [];    //если папка пустая оправляем пустой массив
            var objSend = new objectSend(it, req.body.which_of_tables);
            res.send(objSend);
        }



    });

});

app.listen(3000);


