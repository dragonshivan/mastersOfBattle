var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.Constants = {};

MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE = 50;
MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_COLUMNS = 10;
MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_ROWS = 12;

MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_BLACK_IMG = function() {
	var tokenImageAtlas = new Image();
	tokenImageAtlas.src = "img/hex_black.png";
	return tokenImageAtlas;
}();

MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_WHITE_IMG = function() {
	var tokenImageAtlas = new Image();
	tokenImageAtlas.src = "img/hex_white.png";
	return tokenImageAtlas;
}();