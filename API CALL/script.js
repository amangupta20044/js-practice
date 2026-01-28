async function fetchUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");

    const data = await response.json();

    const user = data.results[0];

    document.getElementById("userImg").src = user.picture.large;
    document.getElementById("name").innerText =
      user.name.first + " " + user.name.last;

    document.getElementById("email").innerText = user.email;
    document.getElementById("country").innerText = user.location.country;

  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
}
