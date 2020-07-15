
document.body.style.border = '10px solid blue';
document.body.style.zIndex = '30002'
document.getElementById('secondary').style.display = 'none'

function groupedShit() {
    setTimeout(() => {
        document.getElementById('secondary').style.display = 'none'
        document.querySelector('.ytp-size-button, .ytp-button').click();
        console.log(document.querySelector('.ytp-size-button'));
        console.log('hello I am running')
    }, 2000);
}

function refreshPage() {
    setTimeout(() => {
        location.reload
        document.querySelector('.ytp-size-button, .ytp-button').click();
        groupedShit()
    }, 500)

}

// const spans = document.getElementsByClassName("css-901oao").style.display
document.getElementsByClassName("css-901oao").style.display = 'none'
// console.log(spans)
console.log("yo homey")

refreshPage()