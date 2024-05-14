// Callback
console.log("Before");

const user = getUser(1, (user) => {
  console.log("User: ", user);

  getRepositories(user.gitHubUsername, (repos) => {
    console.log(repos);
  });
});

console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "Blossom" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(username + ": Calling GitHub API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
