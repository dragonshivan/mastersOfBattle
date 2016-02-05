var GAME_LOOP = GAME_LOOP = GAME_LOOP || {};

/**
 * @public
 * @constructor
 */
GAME_LOOP.ObjectUtils = function() {
	
};

/**
 * @public
 * @param {Object} source
 * @param {Object} target
 */
GAME_LOOP.ObjectUtils.prototype.updateNonEmptyFields = function(source, target) {
	for (var field in source) {
	    if (source.hasOwnProperty(field)) {
	        if(!this.isEmpty(source[field])) {
	        	target[field] = source[field];
	        }
	    }
	}
};

GAME_LOOP.ObjectUtils.prototype.cloneFields = function(original) {
	var clone = Object.create(Object.getPrototypeOf(original));
	Object.getPrototypeOf(clone).constructor = original.constructor;
	for (var field in original) {
	    if (original.hasOwnProperty(field)) {
	        clone[field] = original[field];
	    }
	}
	return clone;
};

/*
 * @private
 */
GAME_LOOP.ObjectUtils.prototype.isEmpty = function(field) {
	if(field === undefined || field == null) {
		return true
	} else {
		return false;
	}
};