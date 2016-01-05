angular.module("EdgeLottoApp", [])
    .controller("EdgeLottoController", function() {
        var lotto = this;

        lotto.players = [];

        lotto.addPlayer = function() {
            lotto.players.push(lotto.playerName);
            lotto.playerName = "";
        };
    }
);
