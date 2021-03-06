﻿import $ = require("jquery");
import { GamePlan } from "./Object/GamePlan";
import { HumanPlayer } from "./Object/Dynamic/Player/HumanPlayer";
import { MachinPlayer } from './Object/Dynamic/Player/MachinPlayer';
import { BasePlayer } from "./Object/Dynamic/Player/BasePlayer";
import { Block } from "./Object/Static/Block/Block";
import { ObjectFactory } from './Object/Static/ObjectFactory';
import { MachinPlayer2 } from "./Object/Dynamic/Player/MachinPlayer2";
import { BillGatesOV, SteveJobsOV, LinusOV, PineTreeOV, PalmTreeOV, CoconutPalmTreeOV, FireOV, StoneOV, HoleOV, GrassOV } from '../Configuration/ObjectVisual';

export class GameCreation {
    public static HumanPlayer: BasePlayer;
    public static MachinPlayers: Array<BasePlayer>;
    public static SingleBlocks:Array<Block>;

    // tslint:disable-next-line:no-empty
    constructor() {}

    static initialize(): void {
        GamePlan.getInstance().CreateChessboardPlan();
        let humanplayer:HumanPlayer = new HumanPlayer("bill", new BillGatesOV());
        humanplayer.Create();
        $("#1").addClass(humanplayer.name);
        this.HumanPlayer = humanplayer;

        let machinPlayer:MachinPlayer = new MachinPlayer("stevejobs", new SteveJobsOV(),262);
        machinPlayer.Create();
        $("#262").addClass(machinPlayer.name);
        machinPlayer.MoverMachin();
      
        let machinPlayer2:MachinPlayer2 = new MachinPlayer2("linus", new LinusOV(),292);
        machinPlayer2.Create();
        $("#292").addClass(machinPlayer2.name);
        machinPlayer2.MoverMachin();
       

        ObjectFactory.CreateRandomSingleBlocks(40, 'block',new FireOV())
        ObjectFactory.CreateRandomSingleBlocks(30, 'block2',new StoneOV())
        ObjectFactory.CreateRandomSingleBlocks(20, 'block3',new HoleOV())
        ObjectFactory.CreateRandomSingleBlocks(40, 'block4',new PineTreeOV())
        ObjectFactory.CreateRandomSingleBlocks(20, 'block5',new GrassOV())
        ObjectFactory.CreateRandomSingleBlocks(40, 'block6',new PalmTreeOV())
        ObjectFactory.CreateRandomSingleBlocks(40, 'block7',new CoconutPalmTreeOV())
        
    }
}