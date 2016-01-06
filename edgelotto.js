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
    }
);
