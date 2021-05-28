// Init gitHub
const github = new GitHub;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search inpuut Event listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make HTTP Call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show Alert
                ui.showAlert('User not Found', 'alert alert-danger');
            }else {
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        // Clear Profile
        ui.clearProfile();
        
    }
});