
export class Alarm {
    constructor(
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