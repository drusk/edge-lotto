angular.module("EdgeLottoApp", [])
    .controller("EdgeLottoController", function() {
        var lotto = this;

        lotto.players = [];

        lotto.addPlayer = function() {
            lotto.players.push(
                {
                    name: lotto.playerName,
                    numTickets: lotto.numTickets
                }
            );
            lotto.playerName = "";
            lotto.numTickets = 0;
        };

        lotto.removePlayer = function(player) {
            var index = lotto.players.indexOf(player);
            lotto.players.splice(index, 1);
        };
    }
);
