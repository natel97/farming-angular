import { Plant } from '../plot/plant';
export class Item {
    constructor(public id: number, public plant: Plant, public cost: number, public sellFor: number, public quantity: number) { }
}
