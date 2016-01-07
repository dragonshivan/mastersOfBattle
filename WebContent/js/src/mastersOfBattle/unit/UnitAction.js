var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitAction = function(actionName, range, areaRows, areaColumns, restictions, effect) {
	this.actionName = actionName;
	this.range = range;
	this.areaRows = areaRows;
	this.areaColumns = areaColumns;
	this.restictions = restictions;
	this.effect = effect;
};


MASTERS_OF_BATTLE.UnitAction.prototype.perform = function(owiningUnit, cells, units) {
	
};