/**
 * Created by Rida on 7/17/2017.
 */

export class Task {
    id:number ;
    text:string;
    created_date:string;

    constructor (id:number , text:string , created_date:string)
    {
        this.id = id;
        this.text = text;
        this.created_date = created_date;
    }
}



