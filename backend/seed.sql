INSERT INTO profile (id, name, email, education, skills, projects, work, links) VALUES ( 
    1, 
    'Bhoomika Saxena', 
    'sbhoomi1730@gmail.com', 
    'Your Education (e.g., B. Tech. in Computer Science, Manipal University Jaipur, 2026)', 
    '["Python", "Machine Learning", "IoT Solutions", "Web Development"]'::jsonb, 
    '[{"title": "Project 1", "description": "Built a hand detection model using python", "links": ["https://github.com/BS-Tech17/NLP-for-document-summarizing"]}, {"title": "Project 2", "description": "AI-Based document summarization", "links": ["https://github.com/BS-Tech17/Hand-Detection-using-AI"]}]'::jsonb, 
    '[{"title": "Intern at Company Clearleaff Solutions LLP Noida", "description": "Worked as a Web developer for making an IoT simulator software"}, {"title": "AI Intern", "description": "Developed an AI-based model for pseudocoloring of images in different terrains "}]'::jsonb, 
    '{"github": "https://github.com/BS-Tech17", "linkedin": "https://linkedin.com/in/yourname", "portfolio": "https://portfolio-placeholder.com"}'::jsonb 
) 
ON CONFLICT (id) DO UPDATE SET 
    name = EXCLUDED.name, 
    email = EXCLUDED.email, 
    education = EXCLUDED.education, 
    skills = EXCLUDED.skills, 
    projects = EXCLUDED.projects, 
    work = EXCLUDED.work, 
    links = EXCLUDED.links;
