var MINIMAX = MINIMAX = MINIMAX || {};

/**
 * @constructor
 * @returns {MINIMAX.TreePrinter}
 */
MINIMAX.TreePrinter = function() {
	
};

/**
 * 
 * @param rootNode
 * @returns {String}
 */
MINIMAX.TreePrinter.prototype.print = function(rootNode) {
	var curChildNodes = rootNode.childNodes;
	console.log(rootNode.toString());
	while(curChildNodes.length != 0) {
		console.log("__________________");
		var nextChildNodes = new Array();
		for(var i = 0; i < curChildNodes.length; i++) {
			var curChild = curChildNodes[i];
			console.log(curChild.toString());
			for(var j = 0; j < curChild.childNodes.length; j++) {
				nextChildNodes.push(curChild.childNodes[j]);
			}
		}
		curChildNodes = nextChildNodes;
	}
}