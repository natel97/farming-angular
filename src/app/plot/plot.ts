import { Plant } from './plant';

export class Plot {
    constructor(
        public id: number,
        public order: number,
        public plant: Plant,
        public lastWatered: Date,
        public planted: Date,
        public ready: Date) { }

        plantIsAlive = () => {
        return Date.now() < this.lastWatered.getTime() + this.plant.hoursToDie * 3000;
    }
}
