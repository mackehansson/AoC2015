/*
North: ^
South: v
East: >
West: <

i = x, y

i = 0,0
a = 1
visited = [{x: 0, y: 0}]

Direction: >
    x + 1
    a = 2
    Visited = [{x: 0, y: 0}, {x: 1, y: 0}];
*/

const NORTH = "^";
const SOUTH = "v";
const EAST = ">";
const WEST = "<";

type VisitedModel = { x: number; y: number };

function getRouteArray(route: string) {
    return route.split("");
}

export const Day3 = () => {
    const housesReceiveLeastOnePresent = (route: string) => {
        const routeArray = getRouteArray(route);

        // VareZ
        const startPosition: VisitedModel = { x: 0, y: 0 };
        const count = 1;
        const visited: VisitedModel[] = [startPosition];
        let currentPosition = startPosition;

        for (const stop of routeArray) {
            switch (stop) {
                case NORTH: {
                    // Add to Visited array
                    const newX = currentPosition.x;
                    const newY = currentPosition.y + 1;

                    visited.push({
                        x: newX,
                        y: newY,
                    });

                    currentPosition = {
                        x: newX,
                        y: newY,
                    };

                    break;
                }

                case SOUTH: {
                    // Add to Visited array
                    const newX = currentPosition.x;
                    const newY = currentPosition.y - 1;

                    visited.push({
                        x: newX,
                        y: newY,
                    });

                    currentPosition = {
                        x: newX,
                        y: newY,
                    };
                    break;
                }

                case EAST: {
                    // Add to Visited array
                    const newX = currentPosition.x - 1;
                    const newY = currentPosition.y;

                    visited.push({
                        x: newX,
                        y: newY,
                    });

                    currentPosition = {
                        x: newX,
                        y: newY,
                    };

                    break;
                }

                case WEST: {
                    // Add to Visited array
                    const newX = currentPosition.x + 1;
                    const newY = currentPosition.y;

                    visited.push({
                        x: newX,
                        y: newY,
                    });

                    currentPosition = {
                        x: newX,
                        y: newY,
                    };

                    break;
                }

                default:
                    break;
            }
        }

        const getSingleLocation = new Set();

        const uniqueLocations = visited.filter((i) => {
            const isDuplicate = getSingleLocation.has(i);

            getSingleLocation.add(i);

            if (!isDuplicate) return true;

            return false;
        });

        return uniqueLocations;
    };

    return (
        <div className="mb-10 p-6 bg-slate-200">
            <h1 className="text-3xl font-bold text-center mb-6">Day 3</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="w-1/2 text-center">Puzzle 1</th>
                        <th className="w-1/2 text-center">Puzzle 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <pre>{JSON.stringify(housesReceiveLeastOnePresent("^>v<"), null, 2)}</pre>
                        </td>
                        <td className="text-center">{}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
