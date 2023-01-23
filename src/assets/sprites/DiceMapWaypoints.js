(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("DiceMapWaypoints",
{ "compressionlevel":-1,
 "height":10,
 "infinite":false,
 "layers":[
        {
         "data":[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
         "height":10,
         "id":3,
         "name":"Background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 5, 5, 5, 4, 5, 4, 5, 5, 2, 4, 5, 2, 5, 1,
            1, 4, 2, 5, 3, 3, 3, 3, 3, 3, 4, 2, 4, 5, 1,
            1, 4, 4, 4, 3, 5, 5, 5, 4, 3, 5, 5, 3, 3, 5,
            1, 5, 5, 4, 3, 4, 5, 2, 5, 3, 5, 5, 3, 4, 1,
            1, 4, 4, 5, 3, 5, 2, 4, 4, 3, 4, 5, 3, 4, 1,
            1, 4, 5, 5, 3, 4, 5, 5, 4, 3, 3, 3, 3, 5, 1,
            5, 3, 3, 3, 3, 5, 2, 4, 5, 4, 5, 4, 4, 5, 1,
            1, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 5, 2, 5, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         "height":10,
         "id":1,
         "name":"Main",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 8, 8, 8, 8, 8, 8, 8, 8, 0, 8, 8, 0, 8, 0,
            0, 8, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 8, 8, 0,
            0, 8, 8, 8, 0, 8, 8, 8, 8, 0, 8, 8, 0, 0, 0,
            0, 8, 8, 8, 0, 8, 8, 0, 8, 0, 8, 8, 0, 8, 0,
            0, 8, 8, 8, 0, 8, 0, 8, 8, 0, 8, 8, 0, 8, 0,
            0, 8, 8, 8, 0, 8, 8, 8, 8, 0, 0, 0, 0, 8, 0,
            0, 0, 0, 0, 0, 8, 0, 8, 8, 8, 8, 8, 8, 8, 0,
            0, 8, 8, 8, 8, 8, 8, 0, 8, 8, 8, 8, 0, 8, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":6,
         "name":"Towers",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":15,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":5,
         "name":"Waypoints",
         "objects":[],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":4,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":96,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/..\/..\/..\/..\/..\/..\/Desktop\/TowerDefense\/DiceTiles.tsx"
        }, 
        {
         "firstgid":6,
         "source":"..\/..\/..\/..\/..\/..\/..\/..\/Desktop\/TowerDefense\/towerZones.tsx"
        }],
 "tilewidth":96,
 "type":"map",
 "version":"1.9",
 "width":15
});