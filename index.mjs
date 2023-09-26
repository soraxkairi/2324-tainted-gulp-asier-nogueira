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
        const playerData = character.players[0];
        // showAll(character);
        const cauldron   = new Cauldron(ingredients);
        const potionBag  = new PotionBag(potions);
        const potionBags = potionBag.createPotions(character.players[0].pouch_green,cauldron);
        console.log(potionBags);
        // showPotions(potionBags);
        const characters = Character.from({playerData,potionBags});
        showCharacter(characters);
        
        
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

function showCharacter(data)
{
    console.log(data);
}