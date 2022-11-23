import { input } from "./input";

export const Day1 = () => {
    const getFloor = (input: string) => {
        let base = 0;

        const inputArr = input.split("");

        inputArr.forEach((i) => {
            if (i === "(") base++;
            if (i === ")") base--;
        });

        return base;
    };

    const getFirstBasement = (input: string) => {
        let base = 0;
        let position = 1;

        const inputArr = input.split("");

        for (let i = 0; i < inputArr.length; i++) {
            const row = inputArr[i];
            if (row === "(") base++;
            if (row === ")") base--;

            if (base === -1) {
                position = position + i;
                break;
            }
        }

        return position;
    };

    return (
        <div className="mb-10 p-6 bg-slate-200">
            <h1 className="text-3xl font-bold text-center mb-6">Day 1</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="w-1/2 text-center">Puzzle 1</th>
                        <th className="w-1/2 text-center">Puzzle 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{getFloor(input)}</td>
                        <td className="text-center">{getFirstBasement(input)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
