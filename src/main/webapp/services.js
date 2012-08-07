function TypewriterServiceFactory() {

    function initStatistic(char) {
        return new Statistic(char);
    }

    function nextChallenge(characters) {
        var challenge = {
            char: _randomChar(characters)
        }
        return challenge;
    }

    function _randomChar(characters) {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function evaluateKeypress(key, challenge, statistic) {
        var correctStroke = (key == challenge.char);
        if (correctStroke) {
            statistic.correctKeystroke(100);
        } else {
            statistic.wrongKeystroke(100);
        }
        return correctStroke;
    }

    return {
        nextChallenge: nextChallenge,
        initStatistic: initStatistic,
        evaluateKeypress: evaluateKeypress
    }
}


function Statistic(char) {
    this.character = char;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.overallCount = 0;
    this.minimumTime = undefined;
    this.maximumTime = undefined;
    this.overallTime = 0;
}

Statistic.prototype.correctKeystroke = function(millis) {
    this.correctCount++;
    this.keystroke(millis);
};

Statistic.prototype.wrongKeystroke = function(millis) {
    this.wrongCount++;
    this.keystroke(millis);
};

Statistic.prototype.keystroke = function(millis) {
    this.overallCount++;
    this.overallTime += millis;
    if ( this.minimumTime == null || millis < this.minimumTime ) {
        this.minimumTime = millis;
    }
    if ( this.maximumTime == null || millis > this.maximumTime ) {
        this.maximumTime = millis;
    }
};

Statistic.prototype.hitRate = function() {
    if (this.overallCount == 0)
        return 0;
    return Math.round(this.correctCount / this.overallCount * 100);
};

Statistic.prototype.averageTime = function() {
    if (this.overallCount == 0)
        return 0;
    return this.overallTime / this.overallCount;
};



var module = angular.module('typewriterServices', []);

module.factory('typewriterService', TypewriterServiceFactory);



