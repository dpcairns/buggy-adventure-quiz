const SEDive = {
    id: 'dive',
    title: 'A Dive Bar in SE',
    map: {
        top: '50%',
        left: '67%'
    },
    image: 'bartender2.jpg',
    audio: 'dive.mp3',
    action: 'action.mp3',
    description: `
    You enter a trendy "dive" bar.  The bartender ignores you for a solid 3 minutes while they peruse tinder, even though you're clearly the only person waiting for a drink.  They finally acknowledge you by giving you a blank stare and ask "what will it be boss?".  What do you do?
    `,
    choices: [{
        id: 'PBR',
        description: 'Buy a PBR',
        result: `
            The bartender knows you have great taste. You gain some cool person cred, but your healthPoints is declined by 5.  5 what?  Who knows? - HealthPoints: -5 Cred: +40
        `,
        healthPoints: -5,
        cred: 40
    }, {
        id: 'wait',
        description: 'Complain about the wait',
        result: `
            The bartender immediately thinks your a narc and that is NOT chill.  They pour you a Red Bull Vodka and tell you that you better leave a tip...  This hurts you so bad, you physically degrade in healthPoints.  - HealthPoints: -30 Cred: -50
        `,
        healthPoints: -30,
        cred: -50
    }, {
        id: 'compliment',
        description: 'Compliment their sailor tats',
        result: `
            They're stoked that you appreciate their super original ideas for tattoos.  They give you an extra jello shot "on the house".  They also tell you about a super secret house show that night with one of the guys from Built to Spill doing a solo set.  You are stoked! - HealthPoints: +50 Cred: +80
        `,
        healthPoints: 50,
        cred: 80
    }]
};

const NECoffee = {
    id: 'coffee',
    title: 'A Coffee Shop in NE',
    map: {
        top: '20%',
        left: '44%'
    },
    image: 'annoyedbarista2.jpg',
    audio: 'coffee.mp3',
    action: 'action.mp3',
    description: `
    The Barista at the coffee shop is trying to check your privilege on your knowledge of child labor laws in a 3rd world country, what do you do?
    `,
    choices: [{
        id: 'bathroom',
        description: 'Excuse yourself to the bathroom and look up wiki articles',
        result: `
        You ask for the bathroom code and the barista looks at you confused.  They obviously know that you know nothing about all the travesties that are happing around the world and write you off as a privileged narc.  This embarrassment almost kills you, lost some cred. - HealthPoints: -25 Cred: -50
        `,
        healthPoints: -25,
        cred: -50
    }, {
        id: 'actually',
        description: 'Hit back with "...well actually"',
        result: `
            The Barista feels stupid, you somehow pulled this off, I have no idea how...  You gain healthPoints but lose cred because you're a liar and one day will be found out by everybody. - HealthPoints: +35 Cred: -10
        `,
        healthPoints: +35,
        cred: -10
    }, {
        id: 'cower',
        description: 'Cower and say "oh wow, I never thought about it like that thank you for your input!"',
        result: `
            Feeling superior, the Barista tells you that it's okay to not know, but that you should really do some research.  You dodged that bullet, great job! - HealthPoints: +35 Cred: +20
        `,
        healthPoints: 30,
        cred: 20
    }]
};

const NWWhole = {
    id: 'NWWhole',
    title: 'Whole Foods in NW',
    map: {
        top: '42%',
        left: '25%'
    },
    image: 'tech2.jpg',
    audio: 'techbro.mp3',
    action: 'action.mp3',
    description: `A tech bro approaches... He asks if you have a Juul charger, how do you respond?`,
    choices: [{
        id: 'nah',
        description: 'Nah man...',
        result: `
        The tech bro stops you and starts talking about how they work at Amazon and cool their job is.  He goes on and on about the ping-pong championship tournament at work and you almost die of boredom. - HealthPoints: -20 Cred: 0
        `,
        healthPoints: -20,
        cred: 0
    }, {
        id: 'warn',
        description: 'Warn him about the dangers of vaping',
        result: `
        Oh no! The tech bro is livid.  The his Juul booby trapped with poison and you take 50 healthPoints damage. - HealthPoints: -50 Cred: 0
        `,
        healthPoints: -50,
        cred: 0
    }, {
        id: 'pretend',
        description: 'Pretend like you have air pods on and you cannot hear him.',
        result: `
        Oh man, you got out of that one, thank god... - HealthPoints: +35 Cred: +40
        `,
        healthPoints: 35,
        cred: 40
    }]
};

const quests = [
    SEDive, 
    NECoffee, 
    NWWhole,
];

export default quests;