var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitMeleeDamageEffect = function(damage) {
	MASTERS_OF_BATTLE.UnitActionEffect.call(this);
	this.damage = damage;
};

MASTERS_OF_BATTLE.UnitMeleeDamageEffect.prototype = Object.create(MASTERS_OF_BATTLE.UnitActionEffect.prototype);
MASTERS_OF_BATTLE.UnitMeleeDamageEffect.prototype.constructor = MASTERS_OF_BATTLE.UnitMeleeDamageEffect;

MASTERS_OF_BATTLE.UnitMeleeDamageEffect.prototype.apply = function(owningAction, cell, unit) {
	//TODO unit takes damage
};
