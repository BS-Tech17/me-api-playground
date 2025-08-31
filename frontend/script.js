async function fetchAPI(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error: ${response.status} - ${errorText}`);
    }
    return await response.json();
}

async function viewProfile() {
    try {
        const data = await fetchAPI('/profile');
        if (data.error) {
            document.getElementById('profile-output').textContent = `Error: ${data.error}`;
        } else {
            document.getElementById('profile-output').textContent = JSON.stringify(data, null, 2);
        }
    } catch (e) {
        document.getElementById('profile-output').textContent = `Error: ${e.message}`;
    }
}

async function listProjects() {
    try {
        const data = await fetchAPI('/projects');
        document.getElementById('projects-output').textContent = JSON.stringify(data, null, 2);
    } catch (e) {
        document.getElementById('projects-output').textContent = `Error: ${e.message}`;
    }
}

async function searchBySkill() {
    const skill = document.getElementById('skill-input').value.trim();
    if (!skill) {
        document.getElementById('skill-output').textContent = 'Please enter a skill';
        return;
    }
    try {
        const data = await fetchAPI(`/projects?skill=${encodeURIComponent(skill)}`);
        document.getElementById('skill-output').textContent = JSON.stringify(data, null, 2);
    } catch (e) {
        document.getElementById('skill-output').textContent = `Error: ${e.message}`;
    }
}

async function generalSearch() {
    const q = document.getElementById('search-input').value.trim();
    if (!q) {
        document.getElementById('search-output').textContent = 'Please enter a search query';
        return;
    }
    try {
        const data = await fetchAPI(`/search?q=${encodeURIComponent(q)}`);
        document.getElementById('search-output').textContent = JSON.stringify(data, null, 2);
    } catch (e) {
        document.getElementById('search-output').textContent = `Error: ${e.message}`;
    }
}
