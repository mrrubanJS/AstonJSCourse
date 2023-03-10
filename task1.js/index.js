const getPosts = async (page) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
  const headers = new Map(response.headers);
  const data = await response.json();
  return {
    data,
    total: headers.get('x-total-count') || null,
  };
};
const postsDiv = document.querySelector('.posts');

const limit = 10;
let currentPage = 1;
getPosts(currentPage)
.then((result) => {
  showPosts(result.data);
  createPagination(result.total);
});

function showPosts(posts) {
  posts.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('post');
    div.textContent = element.title;
    postsDiv.append(div);
  });
}

const pagination = document.querySelector('.pagination');

function createPagination(totalPosts) {
  const numOfPages = Math.ceil(totalPosts / limit);
  for (let i = 0; i < numOfPages; i++) {
    const div = document.createElement('div');
    div.textContent = i + 1;
    div.addEventListener('click', fetchOnClick);
    pagination.append(div);
  }
  pagination.children[0].classList.add('active');
}

function clearPosts() {
  while (postsDiv.firstChild) {
    postsDiv.removeChild(postsDiv.firstChild);
  }
}

function fetchOnClick(event) {
  if (currentPage !== event.target.textContent) {
    getPosts(event.target.textContent)
      .then((result) => {
        handleActive();
        clearPosts();
        return result.data;
      })
      .then((data) => {
        event.target.classList.add('active');
        showPosts(data);
        currentPage = event.target.textContent;
      });
  }
}

function handleActive() {
  const active = document.querySelector('.active');

  if (active) {
    active.classList.remove('active');
  }
}