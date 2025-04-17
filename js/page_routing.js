const params = new URLSearchParams(window.location.search);
const templateName = params.get('template') || 'fallback-ad';



const template = document.getElementById(templateName);
const clone = template.content.cloneNode(true);
document.body.appendChild(clone);
// ?template=template-ad1