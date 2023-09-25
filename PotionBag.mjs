export default class PotionBag {
    constructor(potions) {
        this.potions = potions;
    }

    createPotions(ingredients, cauldron) {
        const result = this.potions;

        for (let i = 0; i < ingredients.length; i++) {
            for (let j = i + 1; j < ingredients.length; j++) {
                const potion = cauldron.createPotion(ingredients[i], ingredients[j]);
                if (potion) {
                    result.push(potion);
                }
            }
        }

        this.potions = result;
        return result;
    }
}