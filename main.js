
document.body.style.border = '10px solid blue';
document.body.style.zIndex = '30002'
document.getElementById('secondary').style.display = 'none'

function removeSuggestions() {
    setTimeout(() => {
        document.getElementById('secondary').style.display = 'none'
        document.querySelector('.ytp-size-button, .ytp-button').click();
    }, 2000);
}
//Removes Youtube Suggested videos, clicks on Theater Mode button

function refreshPage() {
    setTimeout(() => {
        location.reload
        document.querySelector('.ytp-size-button, .ytp-button').click();
        removeSuggestions()
    }, 500)
}

refreshPage()