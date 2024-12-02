// Define a template for soccer teams
var template = `
    <ul>
        {{#teams}}
        <li>
            <strong>Team:</strong> {{team}} <br>
            <strong>League:</strong> {{league}} <br>
            <strong>Country:</strong> {{country}} <br>
            <strong>Founded:</strong> {{founded}}
        </li>
        {{/teams}}
    </ul>
`;

// Get the 'output' div
var output = document.getElementById('output');

// Fetch and render the JSON data
fetch('soccer_teams.json')
    .then(response => response.json())
    .then(data => {
        var rendered = Mustache.render(template, { teams: data });
        output.innerHTML = rendered;
    })
    .catch(error => {
        console.error('Error:', error);
    });
