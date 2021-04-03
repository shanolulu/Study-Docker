const http=require("http");
const os=require("os");

console.log("weberver starting..."); //단순 출력

var handler=function(request, response){
    console.log("Received request from "+request.connection.remoteAddress);
    response.writeHead(200);
    response.end("<h1>You've hit  "+os.hostname()+"</h1>\n"); //h1으로 열었으면 /h1으로 닫아야 한다.
};
// createserver 서버를 생성
var www = http.createServer(handler);


www.listen(80); //port를 80으로 listen시킨다.

