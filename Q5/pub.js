var fs = require('fs')
var mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker:1883/')

var dataFile
fs.readFile("./sens_data.json", function(err, data) {
    if(err) {
        console.log("File Doesn't Exits !")
    }
    else {
        dataFile = data
    }
})

client.on("connect", function(res, err) {
    if(err) {
        console.log(err)
    } else {
        console.log("Successfully connected to Broker ! h")
        function pub() {
            client.publish("test", dataFile)
            console.log(" Published !! ")
        }
        setInterval(pub, 5000)
    }
})