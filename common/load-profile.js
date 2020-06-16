import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {
    /* reference needed DOM elements */
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const health = document.getElementById('health');
    const cred = document.getElementById('cred');

    /* initialize: load and parse json with user from local storage */
    const user = getUser();

    // if there's no user
    if (!user) {
        // no user? go back to sign up:
        window.location = './';
    }

    // copy data from object to DOM properties:
    name.text = user.name;
    avatar.src = '../assets/avatars/' + user.race + '.png';
    cred.textContent = user.cred;

    // if they're dead, say so in the header
    if (isDead(user)) {
        health.textContent = 'DOA';
    }
    else {
        // otherwise show the user health
        health.textContent = user.health;
    }

}

export default loadProfile;