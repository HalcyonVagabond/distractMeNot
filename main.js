
document.body.style.border = '10px solid blue';
document.body.style.zIndex = '30002'

const youtubeFunctions = {

    removeHomepage(){
        // Removes the homepage section
        document.getElementById('primary').style.display = 'none'
    },
    removeSuggestions(){
        //Removes Youtube Suggested videos, clicks on Theater Mode button
        document.getElementById('related').style.display = 'none'
        document.getElementById('secondary').style.display = 'none'
        document.querySelector('.ytp-size-button, .ytp-button').clic; 
    },
    removeComments(){
        // Removes the comment section
        document.getElementById('comments').style.display = 'none'
        document.getElementById('sections').style.display = 'none'
    },
    ytPageConditionals() {
        console.log("Conditional running from main!")
        if(window.location.href === 'https://www.youtube.com/'){
            this.removeHomepage();
        }
        if(window.location.href.includes('watch')){
            this.removeSuggestions()
        }
        if(window.location.href.includes('watch')){
            this.removeComments()
        }
    }
}

youtubeFunctions.ytPageConditionals();