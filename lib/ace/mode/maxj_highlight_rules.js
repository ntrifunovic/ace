define(function(require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    var MaxJHighlightRules = function() {

	this.$rules = {
	    "start" : [
		{
		    token : "keyword",
		    regex : " CTR\\+F|BUILD "
		},
		{
		    token : "constant.other",
		    regex : "((\\+)|(\\-)|(\\*))"
		},
		{
		    token : "constant.numeric",
		    regex : "[0-9]*\\)"
		},
		{
		    token : "keyword",
		    regex : ":"
		}
	    ]
	};

    }

    oop.inherits(MaxJHighlightRules, TextHighlightRules);

    exports.MaxJHighlightRules = MaxJHighlightRules;
});
