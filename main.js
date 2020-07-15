
document.body.style.border = '10px solid blue';
document.body.style.zIndex = '30002'
document.getElementById('secondary').style.display = 'none'
setTimeout(()=>{
    document.getElementById('secondary').style.display = 'none'
},2000);
setTimeout(()=>{
    document.querySelector('.ytp-size-button, .ytp-button').click();
    console.log(document.querySelector('.ytp-size-button'));
    console.log('hello I am running')
},2000);

function refreshPage(){
    setTimeout(()=>{
        location.reload
    },500)
}

refreshPage()