(function () {



    function getAverage(score1, score2, score3) {
        return (score1 + score2 + score3) / 3;
    }

    function twoTeamsSplit(team1, teamName1, team2, teamName2, team3, teamName3) {
        if (team1 > team2 && team1 > team3) {
            return `${teamName1} team won with ${team1} average scores in total.`
        } else if (team1 < team2 && team3 < team2) {
            return `${teamName2} team won with ${team2} average scores in total.`
        } else if (team3 > team1 && team3 > team2) {
            return `${teamName3} team won with ${team3} average scores in total.`
        } else if (team1 === team2 && team1 > team3) {
            return `Draw!! both ${teamName1}s team and ${teamName2}s team had ${team1}average scores in total.`
        } else if (team2 === team3 && team2 > team1) {
            return `Draw!! both ${teamName2}s team and ${teamName3}s team had ${team2}average scores in total.`
        } else if (team1 === team3 && team1 > team2) {
            return `Draw!! both ${teamName1}s team and ${teamName3}s team had ${team1}average scores in total.`
        } else {
            return `Draw!! all teams ${teamName1}s team and ${teamName2}s team and ${teamName3}s team had ${team1}average scores in total.`
        }
    }
    let johnTeamAv = getAverage(50, 50, 50);
    let mikeTeamAv = getAverage(50, 50, 50);
    let maryTeamAv = getAverage(50, 50, 50);

    console.log(twoTeamsSplit(johnTeamAv, 'John', mikeTeamAv, 'Mike', maryTeamAv, 'Mary'));
})();