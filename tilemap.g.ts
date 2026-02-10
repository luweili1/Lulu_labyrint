// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005040404040404040404010000000000060a0a0a0a0a0a0a0a0d020000000000060a0a0a0a0a0a0a0a0a020000000000060a0a0a0a0a0a0a0a0a020000000000060a0a0a0a0a0a0a0a0a020000000000070808080808010c0c05030000000000000000000000020a0a09000000000000000000000000020a0b09000000000000000000000000020808030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 . . . . . . . . . 2 . . . 
. . 2 . . . . . . . . . 2 . . . 
. . 2 . . . . . . . . . 2 . . . 
. . 2 . . . . . . . . . 2 . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . 2 . . 2 . . . . 
. . . . . . . . 2 . . 2 . . . . 
. . . . . . . . 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast1,myTiles.tile1,sprites.dungeon.chestOpen,sprites.dungeon.hazardSpike,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
