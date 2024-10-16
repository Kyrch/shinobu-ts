const RegExpEmoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

export const getArgs = (args: string[], contextmenu: boolean): string[] => {
    const choice = args[0];
    contextmenu === false ? args.shift() : undefined;
    let animes = args.slice(0).join(' ').replace(RegExpEmoji, '');

    return [choice, animes];
}

export const mudaedl = (animes: string): string[] => {
    let res: string[] = [];
    let animesSpace = animes.replace(/\n/g, '');
    let corte = animesSpace.split(/[{)(}]/);
    let i = 3;
    let k = 4;
    let valor = false;

    if (animes.split('(')[0] !== undefined) {
        res.push(animesSpace.split('(', 1)[0]);
    }

    if (animes.split(')')[1] !== undefined) {
        res.push('$' + corte[2]);
    }

    while (animes.split('(')[i] !== undefined && valor === false) {

        if (animes.split('(')[i] !== undefined) {
            res.push('$' + corte[k]);
            k += 2;
        }

        if (animes.split(')')[i] !== undefined) {
            res.push('$' + corte[k]);
            k += 2;
            i += 2;
        }

        valor = k - 2 === 90 ? true : false;
    }

    return res;
}

export const mudaemm = (list: string): string => {
    let res = '';
    let newList = Array.from(list);

    newList.forEach((character: string) => {
        res += character.replace('|', '').replace(RegExpEmoji, '').replace('\n', '$');
    });

    return res;
}

export const mudaetop = (animes: string): string | void => {
    let res = '';
    let i = 3;
    let teste = false;

    if (animes.split(' - ')[1] !== undefined) {
        res += animes.split(' - ')[1].replace(/\*/g, '').trimEnd();
    } else return;

    while (animes.split(' - ')[i] !== undefined && teste == false) {

        if (animes.split(' - ')[i] !== undefined) {
            res += '$' + animes.split(' - ')[i].replace(/\*/g, '').trimEnd();
            i += 2;
        }

        teste = i - 2 == 75 ? true : false;
    }

    return res;
}

export const mudaewl = (characters: string): string => {
    let res = '';
    let newCharacters: string[] = Array.from(characters);

    for (let character of newCharacters) {
        res += character.replace('\n', '$').replace(/_/gi, ' ').replace(/\*/g, '');
    }

    return res;
}

export const mudaefav = (favourites: any[]): string => {
    let string = '';
    favourites.forEach((fav: { name: { first: string, middle: string, last: string }}) => {
        string += `${fav.name.first || ''} ${fav.name.middle || ''} ${fav.name.last || ''}` + '$';
    });

    string = string.replace(/( )+/g, ' ').slice(0, -1);

    return string;
}