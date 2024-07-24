export default class EnemiesIterator {
    constructor(team) {
        this._team = team;
        this._nextIdx = 0;
    }

    next() {
        if (this._nextIdx === this._team.enemies.length) {
            return { done: true };
        }

        const result = {
            value: this._team.enemies[this._nextIdx],
            done: false
        };

        this._nextIdx++;

        return result;
    }
}