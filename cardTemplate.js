function generateManager(empName, empRole, empId, empEmail, empOffice) {
    const cardContent = `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${empName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${empRole}</h6>
        <ul>
            <li><label>ID:</label>${empId}</li>
            <li><lable>Email:</label><a href="mailto:${empEmail}">${empEmail}</a></li>
            <li><lable>Office Number:</label>${empOffice}</li>
        </ul>
    </div>
</div>
`
    return cardContent;
}

function generateEngineer(empName, empRole, empId, empEmail, empGitName) {
    const cardContent = `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${empName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${empRole}</h6>
        <ul>
            <li><label>ID:</label>${empId}</li>
            <li><lable>Email:</label><a href="mailto:${empEmail}">${empEmail}</a></li>
            <li><lable>GitHub:</label><a href="https://github.com/${empGitName}" target="_blank">${empGitName}</a></li>
        </ul>
    </div>
</div>
`
    return cardContent;
}
function generateIntern(empName, empRole, empId, empEmail, empSchool) {
    const cardContent = `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${empName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${empRole}</h6>
        <ul>
            <li><label>ID:</label>${empId}</li>
            <li><lable>Email:</label><a href="mailto:${empEmail}">${empEmail}</a></li>
            <li><lable>School:</label>${empSchool}</li>
        </ul>
    </div>
</div>
`
    return cardContent;
}

module.exports = {
    generateManager,
    generateEngineer,
    generateIntern
};