var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

function initMastersOfBattleRuntimeUnitConstants() {
	
	/*
	 * unit action
	 */
	MASTERS_OF_BATTLE.Constants.Unit.Action.SWORD_HIT = new MASTERS_OF_BATTLE.UnitAction("Sword hit", 1, 1, 1, 
			MASTERS_OF_BATTLE.Constants.Unit.Action.Restriction.ENEMY_UNIT_ONLY, 
			new MASTERS_OF_BATTLE.UnitMeleeDamageEffect(25));
	MASTERS_OF_BATTLE.Constants.Unit.Action.ARROW_HIT = new MASTERS_OF_BATTLE.UnitAction("Arrow hit", 12, 1, 1, 
			MASTERS_OF_BATTLE.Constants.Unit.Action.Restriction.ENEMY_UNIT_ONLY, 
			new MASTERS_OF_BATTLE.UnitArrowDamageEffect(100, 0.25));
	
	/*
	 * unit frame crops
	 */
	MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Standing] = [];
	MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Walking] = [];	
	MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Standing][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left] = 
		[new GAME_LOOP.ImageCrop(0, 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE)];
	MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Standing][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Right] = 
		[new GAME_LOOP.ImageCrop(0, 3 * 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE)];
	MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Standing][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Up] = 
		[new GAME_LOOP.ImageCrop(0, 0, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE)];
	MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Standing][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Down] = 
		[new GAME_LOOP.ImageCrop(0, 128, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE)];
	
	MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left] = 
		[
		 new GAME_LOOP.ImageCrop(64, 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(128, 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(192, 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256, 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 64, 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 128, 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 192, 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 256, 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 ];
	MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Right] = 
		[
		 new GAME_LOOP.ImageCrop(64, 3 * 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(128, 3 * 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(192, 3 * 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256, 3 * 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 64, 3 * 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 128, 3 * 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 192, 3 * 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 256, 3 * 64, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 ];
	MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Up] = 
		[
		 new GAME_LOOP.ImageCrop(64, 0, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(128, 0, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(192, 0, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256, 0, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 64, 0, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 128, 0, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 192, 0, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 256, 0, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 ];
	MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Down] = 
		[
		 new GAME_LOOP.ImageCrop(64, 128, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(128, 128, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(192, 128, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256, 128, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 64, 128, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 128, 128, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 192, 128, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(256 + 256, 128, 0, 0, 64, 64, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 ];
	
	/*
	 * unit image atlas
	 */
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing] = [];
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["body"] = [];
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["torso"] = [];
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking] = [];
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["body"] = [];
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["torso"] = [];
	
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["body"]["male"] = 
		function() {
			var tokenImageAtlas = new Image();
			tokenImageAtlas.src = "img/unit/Walking/body/BODY_male.png";
			return tokenImageAtlas;
		}();
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["torso"]["chain_armor_torso"] = 
		function() {
			var tokenImageAtlas = new Image();
			tokenImageAtlas.src = "img/unit/Walking/torso/TORSO_chain_armor_torso.png";
			return tokenImageAtlas;
		}();	
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["body"]["male"] = 
		function() {
			var tokenImageAtlas = new Image();
			tokenImageAtlas.src = "img/unit/Walking/body/BODY_male.png";
			return tokenImageAtlas;
		}();
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["torso"]["chain_armor_torso"] = 
		function() {
			var tokenImageAtlas = new Image();
			tokenImageAtlas.src = "img/unit/Walking/torso/TORSO_chain_armor_torso.png";
			return tokenImageAtlas;
		}();	
	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["torso"]["leather_armor_torso"] = 
		function() {
			var tokenImageAtlas = new Image();
			tokenImageAtlas.src = "img/unit/Walking/torso/TORSO_leather_armor_torso.png";
			return tokenImageAtlas;
		}();	
		
	/*
	 * unit characteristics
	 */
	MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.SWORDSMAN = new MASTERS_OF_BATTLE.UnitCharacteristics("[H] Swordsman", 
				MASTERS_OF_BATTLE.Constants.Faction.HUMAN, 
				1, 1, 
				50, 4, 
				50, 50, 
				MASTERS_OF_BATTLE.Constants.Unit.Action.SWORD_HIT, 
				[
				 	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["body"]["male"], 
					MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["torso"]["chain_armor_torso"]
				],
				MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Standing][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left],
				[
				 	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["body"]["male"], 
					MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["torso"]["chain_armor_torso"]
				],
				MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left]);	
	MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.ARCHER = new MASTERS_OF_BATTLE.UnitCharacteristics("[H] Archer", 
			MASTERS_OF_BATTLE.Constants.Faction.HUMAN, 
			1, 1, 
			50, 4, 
			50, 30, 
			MASTERS_OF_BATTLE.Constants.Unit.Action.ARROW_HIT, 
			[
			 	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["body"]["male"], 
				MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Standing]["torso"]["leather_armor_torso"]
			],
			MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Standing][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left],
			[
			 	MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["body"]["male"], 
				MASTERS_OF_BATTLE.Constants.Unit.ImageAtlas[MASTERS_OF_BATTLE.Constants.Unit.State.Walking]["torso"]["leather_armor_torso"]
			],
			MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left]);	
	
	
	
};