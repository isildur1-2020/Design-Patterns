export enum ATTACK_TYPE {
  HEADSHOT = "HEADSHOT",
}

export class Attack {
  constructor(private type: string, private damage: number) {}

  getType() {
    return this.type;
  }
  getDamage() {
    return this.damage;
  }
}

interface Enemy {
  calculateDamage(attack: Attack): number;
}

export class ConcreteEnemy implements Enemy {
  calculateDamage(attack: Attack): number {
    return attack.getDamage();
  }
}

class Decorator implements Enemy {
  constructor(enemy: Enemy) {}

  calculateDamage(attack: Attack): number {
    return attack.getDamage();
  }
}

export class ConcreteDecorator extends Decorator {
  calculateDamage(): number {
    return 100;
  }
}

export class Cask extends Decorator {
  calculateDamage(attack: Attack): number {
    if (attack.getType() == ATTACK_TYPE.HEADSHOT) {
      return 0;
    }
    return 100;
  }
}
