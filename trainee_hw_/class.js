class Warrior {
  constructor(options) {
    this._level = 1;
    this._rank = "Pushover";
    this._experience = 100;
    this._achievements = [];
  }

  level() {
    return this.checkLevel();
  }

  rank() {
    return this._rank;
  }

  experience() {
    return this._experience;
  }

  achievements() {
    return this._achievements;
  }

  training(event) {
    this.checkLevel();
    if (+event[2] > +this.level()) return "Not strong enough";
    else {
      this._experience += +event[1];
      this._achievements.push(event[0]);
      this.checkRank();
    }
    return event[0];
  }
  battle(enemy_level) {
    if (enemy_level < 1 || enemy_level > 100) return "Invalid level";

    if (enemy_level === this.level()) {
      this._experience += 10;
      this.checkLevel();
      this.checkRank();
      return "A good fight";
    }

    if ((enemy_level - this.level()) === -1) {
      this._experience += 5;
      this.checkLevel();
      this.checkRank();
      return "Easy fight";
    }

    if ((enemy_level - this.level()) <= -2) {
      this._experience += 0;
      this.checkLevel();
      this.checkRank();
      return "Easy fight";
    }
    if (this.compareRanks(enemy_level) === false && (enemy_level - this.level()) >= 5) return "You've been defeated";
    if ((enemy_level - this.level()) >= 1) {
      let diff = Math.abs(enemy_level - this.level());
      this._experience += 20 * (diff ** 2);
      this.checkLevel();
      this.checkRank();
      return "An intense fight";
    }


  }

  checkLevel() {
    if (+this._level >= 100) {
      this._level = 100;
      this._experience = 10000;
      return this._level;
    }
    return this._level = Math.floor(this.experience() / 100);
  }

  compareRanks(enemyLvl) {
    let indexOfRankMain = Math.floor(this._level / 10);
    let indexOfRankEnemy = Math.floor(enemyLvl / 10);
    if (indexOfRankEnemy > indexOfRankMain) return false;
  }

  checkRank() {
    this.checkLevel();
    let ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    let indexOfRank = Math.floor(this._level / 10);
    if (indexOfRank >= ranks.length) indexOfRank = ranks.length - 1; // Adjust the index to the last rank if it exceeds the array length
    this._rank = ranks[indexOfRank];
    return this._rank;
  }

}
var Goku = new Warrior();
console.log(Goku.level())
console.log(Goku.rank())
console.log(Goku.achievements())
console.log(Goku.training(["Do ten push-ups", 95, 1]))
console.log(Goku.level())
console.log(Goku.battle(0))
console.log(Goku.battle(1))
console.log(Goku.level())
console.log(Goku.achievements())
console.log(Goku.rank())
console.log(Goku.battle(3))
console.log(Goku.level())
console.log(Goku.training(["Survive one night at the Forest of Death", 170, 2]))
console.log(Goku.training(["Mastered the Spirit Bomb", 1580, 10]))
console.log(Goku.achievements())
console.log(Goku.battle(2))
console.log(Goku.level())
console.log(Goku.experience())
console.log(Goku.battle(9))
console.log(Goku.battle(14) )
console.log(Goku.level())
console.log(Goku.battle(12))
console.log(Goku.battle(8))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.battle(140))
console.log(Goku.training(["Mastered the Spirit Bomb", 1580, 10]))
console.log(Goku.level())
console.log(Goku.rank())
console.log(Goku.battle(30) )
console.log(Goku.rank())
console.log(Goku.level())
console.log(Goku.experience())
console.log(Goku.training(["Mastered the Shadow Clone Jutsu", 19, 6]))
console.log(Goku.experience())
console.log(Goku.level())
console.log(Goku.battle(32))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.battle(39))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.level())
console.log(Goku.training(["Defeat Superman", 10000, 100]))
console.log(Goku.training(["Mastered the Spirit Gun", 1340, 43]))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.level())
console.log(Goku.battle(61))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.training(["Mastered the Perfect Roundhouse Kick", 1781, 60]))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.battle(83))
console.log(Goku.level())
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.training(["Defeat The Four Horsemen", 1100, 82]))
console.log(Goku.battle(100))
console.log(Goku.rank())
console.log(Goku.level())
console.log(Goku.experience())
console.log(Goku.training(["Win the Intergalaxtic Tournament", 679, 91]))
console.log(Goku.experience())
console.log(Goku.training(["Fight Superman to a draw", 11000, 99]))
console.log(Goku.level())
console.log(Goku.experience())
console.log(Goku.rank())
console.log(Goku.training(["Defeat Superman", 10000, 100]))
console.log(Goku.achievements())


