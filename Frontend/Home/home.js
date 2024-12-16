const inputbox = document.getElementById('input');
const postButton = document.getElementById('Post');
const deleteButton = document.getElementById('Deletetweet');
const editButton = document.getElementById('edittweet');

// Create a container for tweets
const tweetContainer = document.createElement('div');
tweetContainer.id = 'tweetContainer';
document.body.appendChild(tweetContainer);

function TweetboxFunction() {
    postButton.addEventListener('click', () => {
        if (inputbox.value.trim() === '') {
            alert('Input cannot be empty!');
            return;
        }

        // Create a new tweet box
        const tweetBox = document.createElement('div');
        tweetBox.className = 'tweet-box';

        // Add content
        const tweetContent = document.createElement('span');
        tweetContent.textContent = inputbox.value;

        // Add buttons for delete and edit
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';

        // Append content and buttons to the tweet box
        tweetBox.appendChild(tweetContent);
        tweetBox.appendChild(deleteBtn);
        tweetBox.appendChild(editBtn);
        tweetContainer.appendChild(tweetBox);

        // Clear input box
        inputbox.value = '';

        // Attach delete event
        deleteBtn.addEventListener('click', () => {
            tweetBox.remove();
        });

        // Attach edit event
        editBtn.addEventListener('click', () => {
            inputbox.value = tweetContent.textContent;
            tweetBox.remove();
        });
    });
}

TweetboxFunction();
