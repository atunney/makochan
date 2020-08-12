let pfact = [];
let ran = Math.floor(Math.random() * 0);

class PFacts {
}

module.exports = {
    fact: {
        randomFact: () => {
            pfact[0] = "P-Fact 1: *Persona 5*: The protagonist's Persona, Arsene, is named after the gentleman thief Arsene Lupin, created by French author Maurice Leblanc. Leblanc is the name of the coffee shop the protagonist resides in for the duration of the game.\n";
            pfact[1] = "P-Fact 2: *Persona 5*: Ryuji Sakamoto's Persona, Captain Kidd, is named after the Scottish pirate William Kidd.";
            pfact[2] = "P-Fact 3: *Persona 5*: Ann Takamaki's Persona, Carmen, is named after the Gypsy Dancer seductress most notable in Bizet's opera.";
            pfact[3] = "P-Fact 3: *Persona 5*: Morgana's Persona, Zorro, is named after the famous Californian vigilante.";
            pfact[4] = "P-Fact ";
            return pfact[ran];
        }
    },
    image: {
        factImage: () => {
            return {files: ['./fact_images/' + ran + '.png']};
        }
    }
};