const userLeft=true;
const userWatchingCatMeme=true;

function watchTutorialCallback(callback,errorCallBack){
    if(userLeft){
        errorCallBack({
            name:'User Left',
            message:':('
        });
    }
    else if(userWatchingCatMeme){
        errorCallBack({
            name:'User watching cat meme',
            message:'webDevSimplified < cat'
        });
    }
    else{
        callback('Thumbs up and subscribe');
    }
}

watchTutorialCallback((message)=>{
    console.log('Success:'+message.name);
},(error)=>{
    console.log(error.name+' '+error.message);
});

function watchTutorialPromisified(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name:'User Left',
                message:':('
            });
        }
        else if(userWatchingCatMeme){
            reject({
                name:'User watching cat meme',
                message:'webDevSimplified < cat'
            });
        }
        else{
            resolve('Thumbs up and subscribe');
        }
    });
}

watchTutorialPromisified().then((message)=>{
    console.log('Success:'+message.name);
}).catch((error)=>{
    console.log(error.name+' '+error.message);
});