(function() {
	const token = '3d2d1ca08030190ed70a9832bcd1536c721f5909';
	fetch('https://api.github.com/user/repos', {
	  headers: {
	    Authorization: `token ${token}`
	  }
	}).then(res => res.json()).then(json => console.log(json));
})()
