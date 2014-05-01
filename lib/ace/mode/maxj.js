define(function(require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var Tokenizer = require("ace/tokenizer").Tokenizer;
    var MaxJHighlightRules = require("ace/mode/maxj_highlight_rules").MaxJHighlightRules;

    var Mode = function() {
	this.HighlightRules = MaxJHighlightRules;
    };

    oop.inherits(Mode, TextMode);

    (function() {
	// Extra logic goes here. (see below)
    }).call(Mode.prototype);

    exports.Mode = Mode;
});

