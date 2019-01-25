// Variables
const tweetList = document.getElementById('tweet-list');
// Event Listeners
eventListeners();

function eventListeners() {
    // Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    // Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);
}



// Functions

function newTweet(e) {
    e.preventDefault();

    // console.log('form submitted');
    //Read the textarea value
    const tweet = document.getElementById('tweet').value;
    // console.log(tweet);

    // Create remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
    // Create li
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    // Add Remove button to each tweet
    li.appendChild(removeBtn);

    // Add list
    tweetList.appendChild(li);

    addTweetLocalStorage();

    // tweet.reset();
}

// Remove Tweet From DOM
function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
}

// Adds the tweets to local storage
function addTweetLocalStorage(tweet) {
    console.log('Hello from the Other Side');
}