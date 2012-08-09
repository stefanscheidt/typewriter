function TwServiceFactory() {

    function initStatistic(char) {
        return new Statistic(char);
    }

    function nextChallenge(characters) {
        var challenge = {
            char:   _randomChar(characters),
            start:  new Date().getTime(),
            end:    null
        }
        return challenge;
    }

    function _randomChar(characters) {
        return characters[Math.floor(Math.random() * characters.length)];
    }

    function evaluateKey(key, challenge, statistic) {
        challenge.end = new Date().getTime();
        var correctStroke = (key == challenge.char);
        var millis = challenge.end - challenge.start;
        if (correctStroke) {
            statistic.correctKeystroke(millis);
        } else {
            statistic.wrongKeystroke(millis);
        }
        return correctStroke;
    }

    return {
        nextChallenge: nextChallenge,
        initStatistic: initStatistic,
        evaluateKey: evaluateKey
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
    return Math.round(this.overallTime / this.overallCount);
};



var module = angular.module('tw.services', []);
module.factory('twService', TwServiceFactory);



