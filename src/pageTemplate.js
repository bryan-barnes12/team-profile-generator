function generateHeader() {
    const headerContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Team Members</span>
        </div>
    </nav>
`
    return headerContent;
}



function generateManager(obj) {
    const cardContent = `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${obj.empName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.empRole}</h6>
        <ul>
            <li>ID: ${obj.empId}</li>
            <li>Email: <a href="mailto:${obj.empEmail}">${obj.empEmail}</a></li>
            <li>Office Number: ${obj.empOffice}</li>
        </ul>
    </div>
</div>
`
    return cardContent;
}

function generateEngineer(obj) {
    const cardContent = `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${obj.empName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <ul>
            <li>ID: ${obj.empId}</li>
            <li>Email: <a href="mailto:${obj.empEmail}">${obj.empEmail}</a></li>
            <li>GitHub: <a href="https://github.com/${obj.empGitName}" target="_blank">${obj.empGitName}</a></li>
        </ul>
    </div>
</div>
`
    return cardContent;
}
function generateIntern(obj) {
    const cardContent = `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${obj.empName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.empRole}</h6>
        <ul>
            <li>ID: ${obj.empId}</li>
            <li>Email: <a href="mailto:${obj.empEmail}">${obj.empEmail}</a></li>
            <li>School: ${obj.empSchool}</li>
        </ul>
    </div>
</div>
`
    return cardContent;
};

function generateFooter() {
    const footerContent = `
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
    </body>
    </html>
    `
    return footerContent;
}

module.exports = {
    generateHeader,
    generateManager,
    generateEngineer,
    generateIntern,
    generateFooter
};