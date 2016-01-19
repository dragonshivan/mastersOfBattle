var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitGameEntityFactory = function(unitGameStateFactory) {
	this.unitGameStateFactory = unitGameStateFactory;
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
			unitGameState);
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
			unitGameState);
	return unit;
};