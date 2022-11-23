/*
List of dimensions
    Length: l
    Width: w
    Height: h

Surface area of box:
    (2*l*w) + (2*w*h) + (2*h*l)

Extra paper:
    Area of smallest side.

-----------------------------------

Examples:

    Present Dimensions:
        2x3x4
            Length: 2
            Width: 3
            Height: 4
        
        (2*2*3) + (2*3*4) + (2*4*2)
        2*6 + 2*12 + 2*8 = 52
    
    Extra paper:
        Smallest sides:
        l: 2
        w: 3
        
        l*w
        2*3 = 6

    Answer: 52 + 6
*/

import { input } from "./input";

export const Day2 = () => {
    const surfaceArea = (params: string) => {
        const { height, length, width } = getNumberDimensions(params);
        const splittedWithNumbers = [length, width, height];
        const area = 2 * length * width + 2 * width * height + 2 * height * length;
        return area + smallestArea(splittedWithNumbers);
    };

    const getNumberDimensions = (stringDimension: string) => {
        const splitted = stringDimension.split("x");
        const length = parseInt(splitted[0] as string, 10);
        const width = parseInt(splitted[1] as string, 10);
        const height = parseInt(splitted[2] as string, 10);
        return { length, width, height };
    };

    const get2SmallestSides = (arr: number[]): number[] => {
        return arr.sort((a, b) => a - b).slice(0, 2);
    };

    const smallestArea = (arr: number[]): number => {
        return get2SmallestSides(arr).reduce((acc, curr) => {
            return acc * curr;
        });
    };

    const calculatedFeetOfPaper = (input: string[]): number => {
        return input.reduce<number>((acc, curr) => {
            return acc + surfaceArea(curr);
        }, 0);
    };

    const calculateVolume = (stringDimension: string) => {
        const { height, length, width } = getNumberDimensions(stringDimension);
        return height * length * width;
    };

    const getRibbonLength = (dimension: string) => {
        const { height, length, width } = getNumberDimensions(dimension);
        const smallestSides = get2SmallestSides([height, length, width]);
        const ribbonLength = smallestSides.reduce((lengthOfRibbon, side) => {
            const a = side + side;
            return lengthOfRibbon + a;
        }, 0);
        const volume = calculateVolume(dimension);
        return ribbonLength + volume;
    };

    const calculateLengthOfRibbon = (input: string[]): number => {
        return input.reduce<number>((acc, curr) => {
            return acc + getRibbonLength(curr);
        }, 0);
    };

    return (
        <div className="mb-10 p-6 bg-slate-200">
            <h1 className="text-3xl font-bold text-center mb-6">Day 2</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="w-1/2 text-center">Puzzle 1</th>
                        <th className="w-1/2 text-center">Puzzle 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{calculatedFeetOfPaper(input)}</td>
                        <td className="text-center">{calculateLengthOfRibbon(input)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
