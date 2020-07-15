
document.body.style.border = '10px solid blue';
document.body.style.zIndex = '30002'

function removeHomepage(){
    // Removes the homepage section
    document.getElementById('primary').style.display = 'none'
}
function removeSuggestions() {
    //Removes Youtube Suggested videos, clicks on Theater Mode button
    setTimeout(() => {
        document.getElementById('related').style.display = 'none'
        document.getElementById('secondary').style.display = 'none'
        document.querySelector('.ytp-size-button, .ytp-button').click();
    }, 2000);
}
function removeComments(){
    // Removes the comment section
    document.getElementById('comments').style.display = 'none'
    document.getElementById('sections').style.display = 'none'
}

function refreshPage() {
    if(window.location.href === 'https://www.youtube.com/'){
        location.reload
        setTimeout(() => {
            removeHomepage()
        }, 500)
    }
    if(window.location.href.includes('watch')){
        setTimeout(() => {
            location.reload
            removeSuggestions()
        }, 500)
    }
    if(window.location.href.includes('watch')){
        setTimeout(() => {
            location.reload
            removeComments()
        }, 500)
    }
}

refreshPage()