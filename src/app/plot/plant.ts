export class Plant {

    constructor(
    public id: number,
    public cost: number,
    public images: {
        teen: string,
        harvestable: string,
        dead: string,
        harvested: string
    },
    public worth: number,
    public hoursToDry: number,
    public hoursToDie: number,
    public hoursToTeen: number,
    public hoursToHarvest: number,
    public experienceGained: number,
    public name: string) {}

}

