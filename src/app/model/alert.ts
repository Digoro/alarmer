
export class Alert {
    constructor(
        public header: string,
        public message: string,
        public buttons: AlertButton[]
    ) { }
}

export class AlertButton {
    constructor(
        public text: string,
        public handler: () => any
    ) { }
}
