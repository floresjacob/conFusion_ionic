import {Comment} from './comment';

export interface Dish {

    // Same structure as the db.json served at localhost://3000
    id:number;
    name:string;
    image:string;
    category:string;
    label:string;
    price:string;
    featured:boolean;
    description:string;
    comments:Comment[];



}
