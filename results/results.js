import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreHealth from './score-health.js';
import scoreCred from './score-cred.js';
import { healthMessages, aliveCredMessages, deadCredMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const healthResult = scoreHealth(user.health); // frail, dead, or healthy
const credResult = scoreCred(user.cred);
const healthMessage = healthMessages[healthResult];

let credMessages = null;
if (healthResult === 'dead') {
    credMessages = deadCredMessages;
}
else {
    credMessages = aliveCredMessages;
}

const credMessage = credMessages[credResult];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.race + ', ';
story += healthMessage + ' and ' + credMessage + '.';

storyDisplay.textContent = story;