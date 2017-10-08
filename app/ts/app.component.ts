import {Component} from 'angular2/core';
import {Task} from './task'


@Component({
    selector: 'my-app',
    templateUrl: './app/ts/app.component.html',
    styleUrls: ['app/stackedCards.css']
})

export class AppComponent {

    tasks:Array<Task>;
    global_id:number = 0;
    date:Date;

    constructor (){

        this.tasks = []
    }

    AddTask(task:string){
        this.date = new Date();
        this.global_id++;
        this.tasks.push(new Task(this.global_id,task ,this.date.toDateString()))

        console.log(JSON.stringify(task));
    }
    DoneTask(id_task:number){
        this.tasks = this.tasks.filter(item => item.id !== id_task);
    }

}
