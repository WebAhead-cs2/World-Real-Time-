
const homeHandler=require('./Handler/home');
const publicHandler=require('./Handler/public');


function router(request,response){

    const url=request.url;
    if(url=='/'){
      homeHandler(request,response)
    }
    else if(url.includes('public')){
      publicHandler(request,response);
    }
}
module.exports=router;