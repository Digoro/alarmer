
export class Alarm {
    constructor(
        public id: string,
        public userMail: string,
        public icon: string = 'water',
        public title: string,
        public desc: string,
        public frequency: string,
        public enable: boolean
    ) { }
}