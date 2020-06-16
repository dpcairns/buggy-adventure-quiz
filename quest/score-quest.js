function scoreQuest(choice, questId, user) {
    // add health to user according to the choice's consequences
    user.health + choice.health;
    // add cred to the user according to the choices consequence
    user.cred + choice.cred;
    // set this quest id to completed in the user
    user.completed[questId] = true;
}

export default scoreQuest;