// Variables
const tweetList = document.getElementById('tweet-list');

// Event Listeners
eventListeners();

function eventListeners() {
    // Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    // Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    // Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
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

    addTweetLocalStorage(tweet);

    // Print the alert
    alert('Tweet Added!!');
    // tweet.reset();
    this.reset();
}

// Remove Tweet From DOM
function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }

    // Remove from Storage from Local Storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
}

// Adds the tweets to local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    // Add the tweet into array
    tweets.push(tweet);

    // Convert tweet array into String
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //Get values, if null is returned then we create an empty array
    if (tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

// Prints Local Storage on Load
function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();

    // Loop through storage and then print the value
    tweets.forEach(function (tweet) {
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
    });

}

//Removes tweet from Local Storage

function removeTweetLocalStorage(tweet) {
    //get tweets from storage
    let tweets = getTweetsFromStorage();

    //Remove X from tweet

    const tweetDelete = tweet.substring(0, tweet.length - 1);

    // Loop Throught the tweets  and remove the tweet that's equal
    tweets.forEach(function (tweetsLS, index) {
        if (tweetDelete === tweetsLS) {
            tweets.splice(index, 1);
        }
    });

    // Save the data
    localStorage.setItem('tweets', JSON.stringify(tweets));
}