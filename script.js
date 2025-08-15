// 平滑滚动
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// 复制功能
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('已复制: ' + text);
    });
}

// 获取 GitHub 项目
fetch('https://api.github.com/users/luoian593/repos')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('project-list');
        data.forEach(repo => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || '暂无描述'}</p>
                <a href="${repo.html_url}" target="_blank">查看项目</a>
            `;
            projectList.appendChild(projectCard);
        });
    })
    .catch(error => console.error('获取 GitHub 项目失败:', error));