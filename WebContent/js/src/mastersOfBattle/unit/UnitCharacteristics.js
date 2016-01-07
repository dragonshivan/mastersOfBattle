var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitCharacteristics = function(characteristicsId, 
		faction,
		sizeRows, sizeColumns,
		sequence, movePoints, 
		defense, hitPoints,
		unitAction,
		standRightImageAndFrames /*TODO add remaining animations*/) {
	
	this.characteristicsId = characteristicsId;
	this.faction = faction;
	this.sizeRows = sizeRows;
	this.sizeColumns = sizeColumns;
	this.sequence = sequence;
	this.movePoints = movePoints;
	this.defense = defense;
	this.hitPoints = hitPoints;
	this.unitAction = unitAction;
	this.standRightImageAndFrames = standRightImageAndFrames;
};