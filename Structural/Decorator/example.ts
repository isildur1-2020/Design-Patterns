import { Attack, ATTACK_TYPE, Cask, ConcreteEnemy } from ".";

const headshotAttack = new Attack(ATTACK_TYPE.HEADSHOT, 100);
const nudeEnemy = new ConcreteEnemy();

const enemyWithCask = new Cask(nudeEnemy);

const totalDamage = enemyWithCask.calculateDamage(headshotAttack);
console.log({ totalDamage });
