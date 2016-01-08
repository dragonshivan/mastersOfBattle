var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitDamageEffect = function(damage) {
	MASTERS_OF_BATTLE.UnitActionEffect.call(this);
	this.damage = damage;
};

MASTERS_OF_BATTLE.UnitDamageEffect.prototype = Object.create(MASTERS_OF_BATTLE.UnitActionEffect.prototype);
MASTERS_OF_BATTLE.UnitDamageEffect.prototype.constructor = MASTERS_OF_BATTLE.UnitDamageEffect;

MASTERS_OF_BATTLE.UnitDamageEffect.prototype.apply = function(owningAction, cell, unit) {
	//TODO unit takes damage
};
