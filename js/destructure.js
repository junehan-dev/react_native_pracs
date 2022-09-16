const blog = {
	"owner": "junehan",
	"url": "junehan-dev.github.io",
	getPost(url) {
		return (`https://${url}`);
	}
};

const statBlog = ({owner, url, getPost}) => {
	console.log(owner, url, getPost(url));
}

statBlog(blog);

