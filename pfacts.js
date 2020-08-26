let pfact = [];
let ran = Math.floor(Math.random() * 18);

class PFacts {
}

module.exports = {
    fact: {
        randomFact: () => {
            pfact[0] = "#1: *Persona 5*: The protagonist's Persona, Arsene, is named after the gentleman thief Arsene Lupin, created by French author Maurice Leblanc. Leblanc is the name of the coffee shop the protagonist resides in for the duration of the game.\n";
            pfact[1] = "#2: *Persona 5*: Ryuji Sakamoto's Persona, Captain Kidd, is named after the Scottish pirate William Kidd.";
            pfact[2] = "#3: *Persona 5*: Ann Takamaki's Persona, Carmen, is named after the Gypsy Dancer seductress most notable in Bizet's opera.";
            pfact[3] = "#4: *Persona 5*: Morgana's Persona, Zorro, is named after the famous Californian vigilante.";
            pfact[4] = "#5: *Persona 5*: Yusuke Kitagawa's Persona, Goemon, is named after Goemon Ishikawa, who lived during 16th century Japan.*";
            pfact[5] = "#6: *Persona 5*: Makoto Niijima's Persona, Johanna, is named after Pope Joan, who disguised herself as a man to infiltrate the Roman Catholic clergy.";
            pfact[6] = "#7: *Persona 5*: Futaba Sakura's Persona, Necronomicon, is based on an object called a grimoire, a fictional magic textbook found in horror stories written by H.P. Lovecraft.";
            pfact[7] = "#8: *Persona 5*: Goro Akechi is a reference to the character Kogoro Akechi from the *Private Detective Kogoro Akechi* book series by Japenese writer Edogawa Ranpo.";
            pfact[8] = "#9: *Persona 5*: One of the early ideas was for Morgana to be a sports car, however, he would have been too small to fit the entire party and so the idea was scrapped.";
            pfact[9] = "#10: *Persona 5*: The protagonist's initial Persona was going to be the German demon Mephistopheles. It was later changed to Arsene due to him fitting the theme of the game better.";
            pfact[10] = "#11: *Persona 5*: Director Katsura Hashino and character designer Shigenori Soejima revealed that confidant Hifumi Togo was planned to be an additional party member, but was cue due to the story being too long at that point.";
            pfact[11]= "#12: *Persona 5*: In the Korean and Chinese versions of the game, Ryuji Sakamoto's shoes has their 'Rising Sun Flag' symbol removed.";
            pfact[12] = "#13: *Persona 5*: When entering Mementos, Morgana reveals his ability to turn into a bus, stating 'For some reason 'cats turning into buses' is an extremely widespread cognition among the general public.' This is a reference to the Studio Ghibli film *My Neighbor Totoro*.";
            pfact[13] = "#14: *Persona 5*: The designs of the 22 Arcana are based on the Tarot de Marseille, a popular and influencial Tarot deck from 16th century France.";
            pfact[14] = "#15: *Persona 5*: During a scene in which the group is talking in Futaba's room, Yusuke will rearrange the poses of Futaba's action figures into the poses of the Ginyu Force from Dragon Ball Z.";
            pfact[15] = "#16: *Persona 5*: When a new game is started, the player is prompted to accept that the game is a work of fiction. Refusing to accept this prompt will result in the player being told they're not allowed to play the game, being asked to leave, and then returning to the title screen.";
            pfact[16] = "#17: *Persona 5: Sumire Yoshizawa's Persona, Cendrillon, is based on the French adaptation of the classic folk tale *Cinderella*.";
            pfact[17] = "#18: *Revelations: Persona/Persona*: Masao 'Mark' Inaba was portayed as an African-American in the western release of Persona, but is Japanese in the original version.";
            return pfact[ran];
        }
    },
    image: {
        factImage: () => {
            return {files: ['./fact_images/' + ran + '.png']};
        }
    }
};