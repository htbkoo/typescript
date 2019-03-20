import State from "./State";

export default class TicTacToeEngine {

    public static newState(): State {
        return {
            isPlaying: false
        }
    }
}