const homeHandler=require('./home');
const publicHandler=require('./public');


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