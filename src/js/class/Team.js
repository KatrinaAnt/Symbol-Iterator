import EnemiesIterator from './TeamIterator';

class Team {
    constructor(enemies) {
        this.enemies = enemies;
    }

    [Symbol.iterator] = function() {
        return new EnemiesIterator(this);
    };
}