var ls;
(function (ls) {
	ls.Gamestart = function() {
		return {
			"%22MainScene%22": function() { return "MainScene" }
		}
	};
	ls.MainScene = function() {
		return {
			"%22start%22": function() { return "start" },
			"center": function() { return center },
			"columnu": function() { return columnu },
			"2%2Bls.random()*2": function() { return 2+ls.random()*2 },
			"%22lessThan%22": function() { return "lessThan" },
			"150%2Bls.random()*600": function() { return 150+ls.random()*600 },
			"%E8%AE%A1%E5%88%86%E7%82%B9": function() { return 计分点 },
			"fly.v": function() { return fly.v },
			"columnd": function() { return columnd },
			"fly": function() { return fly },
			"%22MainScene%22": function() { return "MainScene" },
			"%22greaterThan%22": function() { return "greaterThan" },
			"System.start-300-ls.random()*300": function() { return System.start-300-ls.random()*300 },
			"%22greaterOrEqual%22": function() { return "greaterOrEqual" },
			"%22v%22": function() { return "v" },
			"%22Score%3A%22%2Bfly.score": function() { return "Score:"+fly.score },
			"fly.score": function() { return fly.score },
			"4*fly.t": function() { return 4*fly.t },
			"%22t%22": function() { return "t" },
			"%22equalTo%22": function() { return "equalTo" },
			"System.start": function() { return System.start },
			"%22gameover%22": function() { return "gameover" },
			"%22score%22": function() { return "score" }
		}
	};
})(ls || (ls = {}));