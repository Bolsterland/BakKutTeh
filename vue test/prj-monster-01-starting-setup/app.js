function getAttackValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data() {
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0, 
            winner: null,
            logMessages: []
        };
    },
    methods: {
        attackMonster() {
            const attackValue = getAttackValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.currentRound++;
        }, 
        attackPlayer() {
            const attackValue = getAttackValue(8, 15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            const attackValue = getAttackValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.currentRound++;
        },
        healPlayer() {
            const healValue = getAttackValue(8,20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            }
            else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            this.currentRound++;
        },
        restartGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
        }, 
        surrender() {
            this.winner = 'monster';
        }, 
        addLogMessage(who, what, value) {
            message = who + 'hits ' + what + 'with ' + value + ' of damage!';
            this.logMessages.push(message)
        }
    },
    computed: {
        monsterHealthBar() {
            if (this.monsterHealth < 0) {
                return { width: '0%'};
            }
            return {width: this.monsterHealth + '%'};
        },
        playerHealthBar() {
            if (this.playerHealth < 0) {
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'};
        },
        specialAttackStatus() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            }
            else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            }
            else if (value <= 0){
                this.winner = 'player';
            }
        }
    }
});

app.mount('#game');
