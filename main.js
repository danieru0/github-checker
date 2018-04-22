let githubInput = document.getElementById('github-input');

function getInfo(name, login, location, avatar, url) {
	let githubInfo = document.getElementById('github-info'),
		infoLink = document.createElement('a'),
		infoImg = document.createElement('img'),
		infoName = document.createElement('p'),
		infoNick = document.createElement('p'),
		infoLocation = document.createElement('p');
	infoLink.href = url;
	infoImg.src = avatar;
	infoLink.appendChild(infoImg);
	githubInfo.appendChild(infoLink);
	infoName.textContent = name;
	infoName.className = 'info-name';
	githubInfo.appendChild(infoName);
	infoNick.textContent = login;
	infoNick.className = 'info-nick';
	githubInfo.appendChild(infoNick);
	infoLocation.textContent = location;
	infoLocation.className = 'info-location';
	githubInfo.appendChild(infoLocation);
}

githubInput.addEventListener('keydown', function(e) {
	if(e.keyCode === 13) {
		fetch('https://api.github.com/users/' + this.value)
			.then(resp => resp.json())
			.then(resp => {
				if(resp.message == "Not Found") {
					alert('User not found');
				} else {
					getInfo(resp.name, resp.login, resp.location, resp.avatar_url, resp.html_url);
				}
			});
	}
});
