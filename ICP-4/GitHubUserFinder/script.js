function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    const url = `https://api.github.com/users/${user}`;
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    return xhttp;

}

function showUser(user) {
    
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    $("#profile h2").text(`Github profile information for ${user.login}:`);

    //Display avatar
    $(".avatar").html("<img src='' alt='avatar image' id='avatar' />");
    $("#avatar").attr("src", `${user.avatar_url}`)

    //Display information
    $("#info_list").empty();
    $("#info_list").append(`<li>Name: ${user.name}</li>`)
    $("#info_list").append(`<li>ID: ${user.id}</li>`)
    $("#info_list").append(`<li>Link: ${user.html_url}</li>`)
    $("#info_list").append(`<li>Biography: ${user.bio}</li>`)
    $("#info_list").append(`<li>Company: ${user.company}</li>`);
    $("#info_list").append(`<li>Location: ${user.location}</li>`);
    $("#info_list").append(`<li>Email: ${user.email}</li>`);
    $("#info_list").append(`<li>Twitter: ${user.twitter_username}</li>`);
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $("#profile h2").text("User does not exist");
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
