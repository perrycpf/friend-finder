//Import the friend list entries
let friendsList = require('../data/friends.js');

// Export APIs routing
module.exports = (app) => {
    // Display all friend entries
    app.get('/api/friends', (req,res)=>{
        res.json(friendsList);
    });

    // Add new friend entry
    app.post('/api/friends', (req,res)=>{
        let userScores = req.body.scores;
        let biggestDiff = 99999; // Initialize a biggest difference for comparison
        let bestMatch = 0;

        for (i in friendsList) {
            let scoresDiff = 0;
            for (j in userScores) 
                scoresDiff += Math.abs(friendsList[i].scores[j] - userScores[j]);
            if (scoresDiff < biggestDiff) {
                biggestDiff = scoresDiff;
                bestMatch = i;
            }    
        }
        friendsList.push(req.body);
        res.json(friendsList[bestMatch]);
    })
}
