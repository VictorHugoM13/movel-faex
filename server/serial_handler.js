const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const { list } = require("serialport/lib");

const port = new SerialPort("COM1", {
    baudRate: 9600,
});
const parser = new Readline();
port.pipe(parser);

port.on("open", function() {
    console.log("-- Connection opened --");
    parser.on("data", function(data) {
        console.log("Serial Data received: " + data);
        let list = data.split(";");
        setToken(list[0], list[1]);
              
    });
});

function setToken(ra, token){
    const http = require('http');
    const options = {
        host: 'localhost',
        port: 3000,
        secure: false,
        path: '/tokens/'+ ra,
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        }
    };
    const request = http.request(options, (res) => {
        if (res.statusCode !== 200) {
            console.error(`Did not get a Created from the server. Code: ${res.statusCode}`);
            res.resume();
            return;
        }
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('close', () => {
            console.log('Temperatura do estoque atualizada.');
            console.log(JSON.parse(data));
        });
    });
    
    let ts = Math.floor(Date.now()/1000);
    const requestData = {
        "token": token,
        "timestamp": ts,
        "status": "valid"
        
    };
       
    request.write(JSON.stringify(requestData));
    request.end();
    request.on('error', (err) => {
        console.error(`Encountered an error trying to make a request: ${err.message}`);
    });
}





