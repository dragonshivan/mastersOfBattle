var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitGameEntityFactory = function(unitGameStateFactory) {
	this.unitGameStateFactory = unitGameStateFactory;
};

MASTERS_OF_BATTLE.UnitGameEntityFactory.prototype.createUnit = function(unitId, owningPlayer, startCellX, startCellY, membersCount) {
	if(unitId === "humanSwordsman") {
		return this.createHumanSwordsman(owningPlayer, startCellX, startCellY, membersCount);
	} else if(unitId === "humanArcher") {
		return this.createHumanArcher(owningPlayer, startCellX, startCellY, membersCount);
	} else {
		throw "No entity definition for unitId >" + unitId + "< !";
	}
};

MASTERS_OF_BATTLE.UnitGameEntityFactory.prototype.createHumanSwordsman = function(owningPlayer, startCellX, startCellY, membersCount) {
	var unitGameState = this.unitGameStateFactory.createHumanSwordsman(owningPlayer, startCellX, startCellY, membersCount);
	var unit = new MASTERS_OF_BATTLE.UnitGameEntity(
			[
			 	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["body"]["male"], 
				MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["torso"]["chain_armor_torso"]
			],
			[
			 	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["body"]["male"], 
				MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["torso"]["chain_armor_torso"]
			],
			null,
			null,
			null,
			unitGameState,
			this.getStartingOrientation(owningPlayer));
	return unit;
};

MASTERS_OF_BATTLE.UnitGameEntityFactory.prototype.createHumanArcher = function(owningPlayer, startCellX, startCellY, membersCount) {
	var unitGameState = this.unitGameStateFactory.createHumanArcher(owningPlayer, startCellX, startCellY, membersCount);
	var unit = new MASTERS_OF_BATTLE.UnitGameEntity(
			[
			 	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["body"]["male"], 
				MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["torso"]["leather_armor_torso"]
			],
			[
			 	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["body"]["male"], 
				MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["torso"]["leather_armor_torso"]
			],
			null,
			null,
			null,
			unitGameState,
			this.getStartingOrientation(owningPlayer));
	return unit;
};

MASTERS_OF_BATTLE.UnitGameEntityFactory.prototype.getStartingOrientation = function(player) {
	if(player.playerNumber === 1) {
		return MASTERS_OF_BATTLE.Constants.Unit.Orientation.Right;
	} else if(player.playerNumber === 2) {
		return MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left;
	}
}