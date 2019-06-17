    var TPS = batchSize * batchCount/seconds;
    var data  = [seconds,blocTime,TPS];
    const fs = require('fs');
    fs.appendFile("plot_PERFORMANCE_multinode_strato_load.csv", data, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
        });
    fs.appendFile("plot_PERFORMANCE_multinode_strato_load.csv", "\n", function(err) {
        if(err) {
            return console.log(err);
        }

        //console.log("The file was saved!");
        });
