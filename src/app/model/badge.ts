
export class Alarm {
    constructor(
        public icon: string,
        public label: string,
        public badge: Badge,
        public content: string,
    ) { }
}

export class Badge {
    constructor(
        public color: string,
        public count: number
    ) { }
}