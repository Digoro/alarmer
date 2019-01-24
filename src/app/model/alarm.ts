
export class Alarm {
    constructor(
        public id: string,
        public userMail: string,
        public icon: string = 'water',
        public title: string,
        public badge: Badge,
        public desc: string
    ) { }
}

export class Badge {
    constructor(
        public color: string,
        public count: number
    ) { }
}