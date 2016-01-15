var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitArrowDamageEffect = function(damage, enemyAdjacentDamageReductionFactor) {
	MASTERS_OF_BATTLE.UnitActionEffect.call(this);
	this.damage = damage;
	this.enemyAdjacentDamage = Math.round(damage/enemyAdjacentDamageReductionFactor);
};

MASTERS_OF_BATTLE.UnitArrowDamageEffect.prototype = Object.create(MASTERS_OF_BATTLE.UnitActionEffect.prototype);
MASTERS_OF_BATTLE.UnitArrowDamageEffect.prototype.constructor = MASTERS_OF_BATTLE.UnitArrowDamageEffect;

MASTERS_OF_BATTLE.UnitArrowDamageEffect.prototype.apply = function(owningAction, cell, unit) {
	//TODO unit takes damage or enemyAdjacentDamage depending on weather enemy(s) are adjacent to the unit or not
};
