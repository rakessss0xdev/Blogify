const inputbox = document.getElementById('input');       // Input element
const button = document.getElementById('Post');          // Button element
const span = document.createElement('span');             // Create a new span
const tweetbox = document.createElement('div');          // Div to hold the post content

function TweetboxFunction() {
    button.addEventListener('click', () => {
        if (inputbox.value.trim() === '') {
            alert('Input cannot be empty!');
            return;
        }

       
        span.textContent = inputbox.value;

        tweetbox.appendChild(span);
        document.body.appendChild(tweetbox);

        inputbox.value = '';
    });
}

TweetboxFunction();
