import {getData,getCharacter} from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";
import PotionBag from "./PotionBag.mjs";
import Character from "./Character.mjs";



const execute = async () => {
    try
    {
        const data = await getData();
        const potions = [];
        const character = await getCharacter();   
        const ingredients = Ingredients.load(data);
        // showAll(character);
        const cauldron   = new Cauldron(ingredients);
        const potionBag  = new PotionBag(potions);
        const potionBags = potionBag.createPotions(character.players[0].pouch_green,cauldron);
        // showPotions(potionBags);
        const characters = new Character(character.players[0].name,character.players[0].health,character.players[0].magick,character.players[0].stamina,potionBags);
        console.log(characters);
        
    }

    catch(error)
    {
        console.log(error);    
    }
}


execute();
function showPotions(data)
{
    data.forEach(element => {
        console.log(element);
    });
}