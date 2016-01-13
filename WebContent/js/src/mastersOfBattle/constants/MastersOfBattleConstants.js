var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

/*
 * 
 */
MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE = 50;
MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_COLUMNS = 12;
MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_ROWS = 9;

MASTERS_OF_BATTLE.Constants.ZINDEX_BATTLE_FIELD = -1;
MASTERS_OF_BATTLE.Constants.ZINDEX_BATTLE_FIELD_CELL = 10;
MASTERS_OF_BATTLE.Constants.ZINDEX_UNIT = 100;

/*
 * unit action
 */
MASTERS_OF_BATTLE.Constants.Unit.Action.Restriction.ANY_CELL = 0;
MASTERS_OF_BATTLE.Constants.Unit.Action.Restriction.ENEMY_UNIT_ONLY = 1;
MASTERS_OF_BATTLE.Constants.Unit.Action.Restriction.FRIENDLY_UNIT_ONLY = 2;
MASTERS_OF_BATTLE.Constants.Unit.Action.Restriction.FRIENDLY_AND_ENEMY_UNIT = 3;

/*
 * unit state
 */
MASTERS_OF_BATTLE.Constants.Unit.State = {
	Standing: 10,
	Walking: 20,
	PerformingAction: 30,
	TakingDamage: 40,
	Dieing: 50,
	Dead: 60
};

/*
 * unit orientation
 */
MASTERS_OF_BATTLE.Constants.Unit.Orientation = {
	Up: 10,
	UpRight: 20,
	
	Right: 30,
	DownRight: 40,
	
	Down: 50,
	DownLeft: 60,
	
	Left: 70,
	UpLeft: 80
};

/*
 * faction
 */
MASTERS_OF_BATTLE.Constants.Faction.HUMAN = 1;
MASTERS_OF_BATTLE.Constants.Faction.UNDEAD = 0;
