const inputbox = document.getElementById('input');
const tweetbox = document.createElement('tweetbox');
const span = document.getElementById('span')
const button = document.getElementById('button');

function postbar() {
    button.addEventListener('click', () => {
        if(inputbox.value === ''){
            tweetbox.appendChild('span');      
            document.body.appendChild('tweetbox')
        }
    })
}
appendChild();