var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitAction = function(actionId, range, areaRows, areaColumns, restiction, effect) {
	this.actionId = actionId;
	this.range = range;
	this.areaRows = areaRows;
	this.areaColumns = areaColumns;
	this.restiction = restiction;
	this.effect = effect;
};


MASTERS_OF_BATTLE.UnitAction.prototype.perform = function(owiningUnit, cells, units) {
	//TODO
	/*
	 * for each position in area
	 * 		if restiction allows the action to be performed on that cell and it's content (obstacle, unit, etc)
	 * 			apply effect (to that cell and unit on it)
	 */
};


MASTERS_OF_BATTLE.UnitAction.prototype.isAllowed = function(owiningUnit, cell, unitInCell) {
	//TODO check this.restriction agains cell and it's content (obstacle, unit, etc)
};