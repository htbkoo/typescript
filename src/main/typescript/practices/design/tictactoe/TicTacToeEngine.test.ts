import TicTacToeEngine from "./TicTacToeEngine";

describe("TicTacToeEngine", function () {
    it("(maybe unneeded) initial state", function () {
        // given
        // when
        const state = TicTacToeEngine.newState();

        // then
        expect(state.isPlaying).toEqual(false);
    });
});