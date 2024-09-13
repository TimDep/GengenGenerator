module.exports = { renderKenkenToConsole, csvOutput };
function renderKenkenToConsole(kenken){
    const {groups, operationsDes} = makeGroupsAndOperations(kenken)
    console.log("Group ID's: " + renderGroupIDs(groups))
    console.log("Operations: "+ renderOperations(operationsDes, kenken.settings.csv))
    console.log("Solution: " + renderSolutionString(kenken))
    console.log("Torus: " + isTorus(kenken, kenken.settings.csv))
}

function csvOutput(kenken){
    var csvString ="";
    const {groups, operationsDes} = makeGroupsAndOperations(kenken)
    csvString += renderGroupIDs(groups) + ","
    csvString += renderOperations(operationsDes, kenken.settings.csv) +"," //TODO nog iets met csvString doen
    csvString += renderSolutionString(kenken) + ","
    csvString += isTorus(kenken, kenken.settings.csv)
    console.log(csvString)
}
function makeGroupsAndOperations(kenken) {
    var size = kenken.size;
    const groups = [];
    const operationsDes = [];

    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
            groups.push(kenken.board[x][y].cellGroup.groupID);
            operationsDes.push(kenken.board[x][y].cellGroup.operationDescription);
        }
    }
    return { groups, operationsDes };
}


function renderSolutionString(kenken) {
    var kenkenString = "";
    for (var y = 0; y < kenken.size; y++) {
        for (var x = 0; x < kenken.size; x++) {
            kenkenString += kenken.board[x][y].value;
        }
    }
    return kenkenString;
}


function renderGroupIDs(groups) {
    var groupString = ""
    for (var i = 0; i < groups.length; i++) {
        groupString += groups[i]+"/";
    }
    return groupString
}

function renderOperations(operations, csv) {
    var operationString = "";

    for (var i = 0; i < operations.length; i++) {
        var operation = operations[i].toString().replace(/;/g, "");
        if (csv) {
            operationString += operation + "/";
        }
        else{
            operationString += operation + ",";

        }
    }
    operationString = operationString.slice(0, -1);
    return operationString
}

function isTorus(kenken, csv) {
    if (csv) {
        return kenken.settings.torus ? 1 : 0;
    }else{
        return kenken.settings.torus ? "Yes" : "No";
    }
}
