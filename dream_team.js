let dreamTeam =[ 
{name:"Charles Barkley",    gp:6, pts:98, fgm:34, fga:58},
{name:"Larry Bird",         gp:2, pts:19, fgm:8,  fga:11},
{name:"Clyde Drexler",      gp:5, pts:69, fgm:27, fga:39},
{name:"Patrick Ewing",      gp:5, pts:59, fgm:27, fga:43},
{name:"Magic Johnson",      gp:6, pts:58, fgm:19, fga:34},
{name:"Michael Jordan",     gp:6, pts:76, fgm:29, fga:53},
{name:"Christian Laettner", gp:6, pts:44, fgm:18, fga:31},
{name:"Carl Malone",        gp:6, pts:89, fgm:33, fga:53},
{name:"Chris Mullin",       gp:6, pts:86, fgm:31, fga:49},
{name:"Scottie Pippen",     gp:6, pts:48, fgm:20, fga:30},
{name:"David Robinson",     gp:6, pts:71, fgm:32, fga:42},
{name:"John Stockton",      gp:2, pts:10, fgm:5,  fga:6 }
];
let highestPts = 0;
function mostPoints(dreamTeam){
    //let highestPts = 0;
    let highestPlayer = "";
    for (let player of dreamTeam){
        if (player.pts > highestPts){
            highestPts = player.pts;
            highestPlayer = player.name;
        } console.log(highestPlayer);
        return highestPlayer;
    }
}
function printFgAvg(dreamTeam){
    for (let player of dreamTeam){        
        let fgAvg = 100 * player.fgm/player.fga;
        console.log(player.name+"field goal percentage is"+fgAvg+".");
        return player.name,fgAvg;
    }
}


function scoringHistory(dreamTeam){
    let scoreBracketDict = {
        0 : "0-4",
        5 : "5-9",
        10: "10-14",
        15: "15-19",
        20: "20-24"
    };
    let histogram = {};
    dreamTeam.forEach(function(player){
        let ptsPerGame = player.pts/player.gp;
        let scoreBracket = Math.floor(ptsPerGame/5)*5;
        let key = scoreBracketDict[scoreBracket];
        if (!(key in histogram)){
            histogram[key]=[];        
        }
        histogram[key].push(player)
        console.log(histogram);
    });
    return (histogram);       
}
printFgAvg(dreamTeam);

let highScorer = mostPoints(dreamTeam);{
    console.log (highScorer +"is the highest scorer with" + highestPts + "points");
}

let histogram = scoringHistory(dreamTeam)
    for (let key in histogram){
        let players = histogram[key];
        console.log("player who scored" + key + "points")
        for (let player of players){
            console.log(player.name)
        }
    }




